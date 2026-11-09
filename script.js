(() => {
  const storageKey = "charlie-theme";
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
  let preference = null;

  try {
    const saved = localStorage.getItem(storageKey);
    if (saved === "light" || saved === "dark") preference = saved;
  } catch {
    // Theme switching still works when browser storage is unavailable.
  }

  function applyTheme() {
    const dark = preference ? preference === "dark" : systemTheme.matches;
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    const toggle = document.querySelector(".theme-toggle");
    if (toggle) toggle.textContent = dark ? "Light mode" : "Dark mode";
  }

  // Apply the preference before the page body is painted.
  applyTheme();
  if (typeof systemTheme.addEventListener === "function") {
    systemTheme.addEventListener("change", applyTheme);
  } else if (typeof systemTheme.addListener === "function") {
    systemTheme.addListener(applyTheme);
  }

  function initializeControls() {
    const cells = Array.from(document.querySelectorAll("[data-cell]"));
    const gameStatus = document.querySelector("#game-status");
    const resetGame = document.querySelector("#game-reset");
    const gameMode = document.querySelector("#game-mode");
    const difficulty = document.querySelector("#game-difficulty");
    const difficultyHelp = document.querySelector("#difficulty-help");
    if (cells.length === 9 && gameStatus && resetGame && gameMode && difficulty) {
      const lines = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
      let board, player, finished;
      const winningLine = (state, mark) => lines.find(line => line.every(position => state[position] === mark));
      const emptyCells = state => state.map((mark, index) => mark ? -1 : index).filter(index => index !== -1);
      function minimax(state, turn) {
        if (winningLine(state, "O")) return 1;
        if (winningLine(state, "X")) return -1;
        const available = emptyCells(state);
        if (!available.length) return 0;
        const scores = available.map(index => {
          state[index] = turn;
          const score = minimax(state, turn === "O" ? "X" : "O");
          state[index] = "";
          return score;
        });
        return turn === "O" ? Math.max(...scores) : Math.min(...scores);
      }
      function chooseMove(state, level) {
        const available = emptyCells(state);
        const randomMove = () => available[Math.floor(Math.random() * available.length)];
        if (level === "easy") return randomMove();
        if (level === "medium") {
          // Take an immediate win, then block an immediate loss.
          for (const mark of ["O", "X"]) {
            for (const index of available) {
              state[index] = mark;
              const wins = winningLine(state, mark);
              state[index] = "";
              if (wins) return index;
            }
          }
          return randomMove();
        }
        let bestScore = -Infinity;
        let bestMove = available[0];
        for (const index of available) {
          state[index] = "O";
          const score = minimax(state, "X");
          state[index] = "";
          if (score > bestScore) { bestScore = score; bestMove = index; }
        }
        return bestMove;
      }
      function startGame() {
        board = Array(9).fill(""); player = "X"; finished = false;
        difficulty.disabled = gameMode.value !== "ai";
        const descriptions = {
          easy: "Easy: the AI chooses random moves.",
          medium: "Medium: the AI looks for wins and blocks your next winning move.",
          hard: "Hard: the AI plans ahead and cannot be beaten. Can you earn a draw?"
        };
        if (difficultyHelp) difficultyHelp.textContent = (difficulty.disabled ? "Two players take turns on this screen." : descriptions[difficulty.value]) + " Changing a setting starts a new game.";
        cells.forEach((cell, index) => {
          cell.textContent = ""; cell.disabled = false;
          cell.classList.remove("winning-cell");
          cell.setAttribute("aria-label", `Row ${Math.floor(index / 3) + 1}, column ${index % 3 + 1}, empty`);
        });
        gameStatus.textContent = gameMode.value === "ai" ? "Your turn (X)" : "X's turn";
      }
      function placeMark(index) {
        const cell = cells[index];
        board[index] = player; cell.textContent = player; cell.disabled = true;
        cell.setAttribute("aria-label", `Row ${Math.floor(index / 3) + 1}, column ${index % 3 + 1}, ${player}`);
        const win = winningLine(board, player);
        if (win || board.every(Boolean)) {
          finished = true;
          const winner = gameMode.value === "ai" ? (player === "X" ? "You win!" : "The AI wins!") : `${player} wins!`;
          gameStatus.textContent = win ? `${winner} Start a new game to play again.` : "It's a draw! Start a new game to play again.";
          if (win) win.forEach(position => cells[position].classList.add("winning-cell"));
          cells.forEach(button => { button.disabled = true; }); resetGame.focus();
        } else {
          player = player === "X" ? "O" : "X";
          gameStatus.textContent = gameMode.value === "ai" ? (player === "X" ? "Your turn (X)" : "AI's turn (O)") : `${player}'s turn`;
        }
      }
      cells.forEach((cell, index) => cell.addEventListener("click", () => {
        if (finished || board[index] || (gameMode.value === "ai" && player === "O")) return;
        placeMark(index);
        if (!finished && gameMode.value === "ai") placeMark(chooseMove(board, difficulty.value));
      }));
      resetGame.disabled = false;
      resetGame.addEventListener("click", () => { startGame(); cells[0].focus(); });
      gameMode.addEventListener("change", startGame);
      difficulty.addEventListener("change", startGame);
      startGame();
    }
    const contactButton = document.querySelector(".contact-bubble");
    const contactDialog = document.querySelector("#contact-dialog");
    const contactForm = document.querySelector("#contact-form");
    if (contactButton && contactDialog && contactForm) {
      contactButton.addEventListener("click", (event) => {
        event.preventDefault();
        contactDialog.showModal();
      });
      contactDialog.querySelector(".contact-close").addEventListener("click", () => contactDialog.close());
      contactDialog.addEventListener("close", () => contactButton.focus());
      contactForm.addEventListener("submit", (event) => {
        event.preventDefault();
        if (!contactForm.reportValidity()) return;
        const subject = contactForm.elements.subject.value.trim();
        const message = contactForm.elements.message.value.trim();
        if (!subject || !message) {
          contactDialog.querySelector(".contact-status").textContent = "Please enter a subject and message.";
          return;
        }
        const draft = contactDialog.querySelector(".contact-draft");
        draft.href = "mailto:Cja69@njit.edu?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(message);
        draft.hidden = false;
        contactDialog.querySelector(".contact-status").textContent = "Your draft is ready. Open your email app to review and send it.";
        draft.focus();
      });
      contactForm.addEventListener("input", () => {
        contactDialog.querySelector(".contact-draft").hidden = true;
        contactDialog.querySelector(".contact-status").textContent = "";
      });
    }
    document.querySelectorAll("[data-year]").forEach((element) => {
      element.textContent = String(new Date().getFullYear());
    });
    const toggle = document.querySelector(".theme-toggle");
    if (!toggle) return;
    toggle.hidden = false;
    applyTheme();
    toggle.addEventListener("click", () => {
      preference = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      applyTheme();
      try {
        localStorage.setItem(storageKey, preference);
      } catch {
        // Keep the selected theme for this page even without storage access.
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeControls);
  } else {
    initializeControls();
  }
})();
