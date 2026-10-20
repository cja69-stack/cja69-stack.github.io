# Repository guidance

## Website purpose and design

- Build a professional About Me website for Charlie Acosta.
- Use a restrained, balanced color palette: neither bright nor dark. Prefer soft neutral backgrounds and readable text with sufficient contrast.
- Use Times New Roman as the primary font, with a serif fallback, and a base font size of 15px. Headings may use larger sizes to establish a clear hierarchy.
- Keep the layout clean, readable, and responsive on mobile and desktop.
- Use semantic HTML and accessible controls.
- Use semantic HTML5 elements such as `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, and `<footer>` according to their purpose.
- Organize content logically: shared header and navigation, one main content area with related content grouped into meaningful sections, and a footer. Use headings in a clear hierarchy.
- Use exactly one `<h1>` per page for its primary heading, followed by `<h2>` and lower heading levels as appropriate.
- Use only plain HTML, CSS, and JavaScript. Do not add frameworks or libraries.
- Use relative file paths for local stylesheets, scripts, images, and internal page links. External links may use full URLs.
- Keep personal details accurate. Do not invent biography, experience, qualifications, or contact information.

## Project structure

- `index.html` is the website entry point.
- Keep five pages: Home (`index.html`), About Me (`about.html`), Projects (`projects.html`), Skills (`skills.html`), and Contact (`contact.html`). Link all five through shared navigation.
- Home introduces Charlie. About Me covers background, education, and interests. Projects should showcase at least three real projects with descriptions, images or screenshots, and links when available. Skills lists technical skills and accurate proficiencies. Contact provides public contact information.
- Clearly label missing personal details and project placeholders until Charlie provides real content; placeholders do not count as completed projects.
- A contact form cannot send messages without a backend. If adding one, validate it with JavaScript and direct visitors to Charlie's supplied public email address. Never imply that a message was sent.
- `styles.css` contains shared styling, `script.js` contains shared JavaScript, and `assets/` contains local images.
- Keep every image file under 500 KB (500,000 bytes). Check image sizes before adding or updating assets, and optimize any image that reaches or exceeds this limit.
- `README.md` introduces the repository.
- The website is hosted on GitHub Pages at https://cja69-stack.github.io/.
- There is currently no backend, database, build step, or automated test suite.

## Working and validation

- Keep changes focused on the requested task and preserve unrelated user changes.
- Never include secrets or private information in this public repository.
- For website changes, preview the affected pages when a browser is available and check mobile and desktop layouts, links, and any JavaScript behavior.
- Review the changes and run appropriate available checks before committing.
- Report what was verified and any checks that could not be performed.

## Git workflow

- After each completed task, commit the task's changes with a clear, descriptive message, then push to GitHub.
- Stage only files belonging to the task; do not commit unrelated user changes.
- Do not force-push or discard existing work.
- If committing or pushing fails, report the failure and what remains to be done.
