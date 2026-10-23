# Website test plan and execution record

Live site: https://cja69-stack.github.io/

Test date: October 23, 2026 (America/New_York)

Repository revision at testing: `686c0111baf3185a3c7645eb8147d3d85d03f630`

## Execution status

Tests were performed against the public GitHub Pages URLs, not Live Preview. PowerShell HTTP requests verified all 25 main-navigation routes, page titles, shared resources, project images, and downloads. No website defect was demonstrated by those checks, so no site code was changed.

Interactive execution remains incomplete. The browser access host was unavailable. Native Chrome was detected, but Computer Use stopped because it could not determine the current browser URL confidently enough to enforce its policy. No further UI actions were attempted. Google's PageSpeed Insights Lighthouse endpoint returned HTTP 429 (Too Many Requests) for the homepage accessibility request, with no score. The other four audits have not run.

**Pass** means the stated check was actually executed successfully. **Fail** is reserved for an observed site defect. **Blocked** means the test has no actual Pass/Fail result yet; it is not a site failure. Do not submit this as a fully executed test suite until the blocked rows have been run. No Lighthouse score or visual/keyboard result is inferred from HTML source.

## Setup and acceptance criteria

- Use Chrome on the live site with zoom at 100%.
- Phone: DevTools device emulation, 390 x 844 CSS pixels, portrait. Laptop: 1366 x 768 CSS pixels. These are planned test sizes, not sizes already tested.
- For visual tests, scroll from header to footer. Require readable content, usable controls, loaded images, no horizontal scrolling, and no content hidden by the contact bubble. Repeat with the contact dialog open and in both themes.
- For keyboard tests, use Tab and Shift+Tab to traverse all controls, Enter to activate links/buttons, and Escape to dismiss the dialog. Require a visible focus indicator, logical order, working skip link, modal focus containment, and focus returning to Contact me on dismissal. Do not send email.
- For Lighthouse, open each live page in a clean Chrome profile, choose DevTools > Lighthouse > Accessibility > Mobile > Analyze page load. Record the score out of 100 and report version. Repeat in dark mode. Target: at least 90 in each theme, with any reported issues reviewed. A score does not replace keyboard testing.
- Run all shared JavaScript scenarios below on **each of the five pages**; record page-specific failures. For theme tests, start without a saved `charlie-theme` preference where specified.

## Main navigation: every source page and destination

These executed checks extract each link from the source page's live `<nav>`, request its live destination, and verify HTTP 200 plus the expected title. They establish routing and availability; clicking and focus behavior are covered by the blocked interactive tests below.

| ID | What is tested | Steps | Expected result | Actual result |
| :-- | :-- | :-- | :-- | :-- |
| T1 | Home navigation: Home | GET live index.html; extract nav href for Home; GET index.html. | HTTP 200; title Home &#124; Charlie Acosta. | Pass - HTTP 200; title matched (Home &#124; Charlie Acosta). |
| T2 | Home navigation: About Me | GET live index.html; extract nav href for About Me; GET about.html. | HTTP 200; title About Me &#124; Charlie Acosta. | Pass - HTTP 200; title matched (About Me &#124; Charlie Acosta). |
| T3 | Home navigation: Projects | GET live index.html; extract nav href for Projects; GET projects.html. | HTTP 200; title Projects &#124; Charlie Acosta. | Pass - HTTP 200; title matched (Projects &#124; Charlie Acosta). |
| T4 | Home navigation: Skills | GET live index.html; extract nav href for Skills; GET skills.html. | HTTP 200; title Skills &#124; Charlie Acosta. | Pass - HTTP 200; title matched (Skills &#124; Charlie Acosta). |
| T5 | Home navigation: Contact | GET live index.html; extract nav href for Contact; GET contact.html. | HTTP 200; title Contact &#124; Charlie Acosta. | Pass - HTTP 200; title matched (Contact &#124; Charlie Acosta). |
| T6 | About Me navigation: Home | GET live about.html; extract nav href for Home; GET index.html. | HTTP 200; title Home &#124; Charlie Acosta. | Pass - HTTP 200; title matched (Home &#124; Charlie Acosta). |
| T7 | About Me navigation: About Me | GET live about.html; extract nav href for About Me; GET about.html. | HTTP 200; title About Me &#124; Charlie Acosta. | Pass - HTTP 200; title matched (About Me &#124; Charlie Acosta). |
| T8 | About Me navigation: Projects | GET live about.html; extract nav href for Projects; GET projects.html. | HTTP 200; title Projects &#124; Charlie Acosta. | Pass - HTTP 200; title matched (Projects &#124; Charlie Acosta). |
| T9 | About Me navigation: Skills | GET live about.html; extract nav href for Skills; GET skills.html. | HTTP 200; title Skills &#124; Charlie Acosta. | Pass - HTTP 200; title matched (Skills &#124; Charlie Acosta). |
| T10 | About Me navigation: Contact | GET live about.html; extract nav href for Contact; GET contact.html. | HTTP 200; title Contact &#124; Charlie Acosta. | Pass - HTTP 200; title matched (Contact &#124; Charlie Acosta). |
| T11 | Projects navigation: Home | GET live projects.html; extract nav href for Home; GET index.html. | HTTP 200; title Home &#124; Charlie Acosta. | Pass - HTTP 200; title matched (Home &#124; Charlie Acosta). |
| T12 | Projects navigation: About Me | GET live projects.html; extract nav href for About Me; GET about.html. | HTTP 200; title About Me &#124; Charlie Acosta. | Pass - HTTP 200; title matched (About Me &#124; Charlie Acosta). |
| T13 | Projects navigation: Projects | GET live projects.html; extract nav href for Projects; GET projects.html. | HTTP 200; title Projects &#124; Charlie Acosta. | Pass - HTTP 200; title matched (Projects &#124; Charlie Acosta). |
| T14 | Projects navigation: Skills | GET live projects.html; extract nav href for Skills; GET skills.html. | HTTP 200; title Skills &#124; Charlie Acosta. | Pass - HTTP 200; title matched (Skills &#124; Charlie Acosta). |
| T15 | Projects navigation: Contact | GET live projects.html; extract nav href for Contact; GET contact.html. | HTTP 200; title Contact &#124; Charlie Acosta. | Pass - HTTP 200; title matched (Contact &#124; Charlie Acosta). |
| T16 | Skills navigation: Home | GET live skills.html; extract nav href for Home; GET index.html. | HTTP 200; title Home &#124; Charlie Acosta. | Pass - HTTP 200; title matched (Home &#124; Charlie Acosta). |
| T17 | Skills navigation: About Me | GET live skills.html; extract nav href for About Me; GET about.html. | HTTP 200; title About Me &#124; Charlie Acosta. | Pass - HTTP 200; title matched (About Me &#124; Charlie Acosta). |
| T18 | Skills navigation: Projects | GET live skills.html; extract nav href for Projects; GET projects.html. | HTTP 200; title Projects &#124; Charlie Acosta. | Pass - HTTP 200; title matched (Projects &#124; Charlie Acosta). |
| T19 | Skills navigation: Skills | GET live skills.html; extract nav href for Skills; GET skills.html. | HTTP 200; title Skills &#124; Charlie Acosta. | Pass - HTTP 200; title matched (Skills &#124; Charlie Acosta). |
| T20 | Skills navigation: Contact | GET live skills.html; extract nav href for Contact; GET contact.html. | HTTP 200; title Contact &#124; Charlie Acosta. | Pass - HTTP 200; title matched (Contact &#124; Charlie Acosta). |
| T21 | Contact navigation: Home | GET live contact.html; extract nav href for Home; GET index.html. | HTTP 200; title Home &#124; Charlie Acosta. | Pass - HTTP 200; title matched (Home &#124; Charlie Acosta). |
| T22 | Contact navigation: About Me | GET live contact.html; extract nav href for About Me; GET about.html. | HTTP 200; title About Me &#124; Charlie Acosta. | Pass - HTTP 200; title matched (About Me &#124; Charlie Acosta). |
| T23 | Contact navigation: Projects | GET live contact.html; extract nav href for Projects; GET projects.html. | HTTP 200; title Projects &#124; Charlie Acosta. | Pass - HTTP 200; title matched (Projects &#124; Charlie Acosta). |
| T24 | Contact navigation: Skills | GET live contact.html; extract nav href for Skills; GET skills.html. | HTTP 200; title Skills &#124; Charlie Acosta. | Pass - HTTP 200; title matched (Skills &#124; Charlie Acosta). |
| T25 | Contact navigation: Contact | GET live contact.html; extract nav href for Contact; GET contact.html. | HTTP 200; title Contact &#124; Charlie Acosta. | Pass - HTTP 200; title matched (Contact &#124; Charlie Acosta). |

## Layout, keyboard, and Lighthouse: every page

Follow the setup criteria above for each row. On both screen sizes, also click all five main-navigation links and the brand link, returning to the source page between checks.

| ID | What is tested | Steps | Expected result | Actual result |
| :-- | :-- | :-- | :-- | :-- |
| T26 | Home: phone | Open live index.html at 390 x 844; inspect full page and dialog; activate navigation and brand links. | Readable single-column layout; no overflow or overlap; correct destinations. | Blocked - browser automation unavailable. |
| T27 | Home: laptop | Open live index.html at 1366 x 768; inspect full page and dialog; activate navigation and brand links. | Balanced layout; readable text; correct links; no clipping. | Blocked - browser automation unavailable. |
| T28 | Home: keyboard | Open live index.html; Tab/Shift+Tab through every control; use Enter on skip link, navigation, theme, Contact me and Close; test Escape. | All controls reachable; visible focus; correct activation; modal contains focus and returns it on close. | Blocked - browser automation unavailable. |
| T29 | Home: Lighthouse Accessibility | Audit live index.html with the Lighthouse procedure above in light and dark themes; record both scores and version. | Score at least 90/100 in each theme; review findings. | Blocked - PageSpeed Insights request returned HTTP 429; no score. |
| T30 | About Me: phone | Open live about.html at 390 x 844; inspect full page and dialog; activate navigation and brand links. | Readable single-column layout; no overflow or overlap; correct destinations. | Blocked - browser automation unavailable. |
| T31 | About Me: laptop | Open live about.html at 1366 x 768; inspect full page and dialog; activate navigation and brand links. | Balanced layout; readable text; correct links; no clipping. | Blocked - browser automation unavailable. |
| T32 | About Me: keyboard | Open live about.html; Tab/Shift+Tab through every control; use Enter on skip link, navigation, theme, Contact me and Close; test Escape. | All controls reachable; visible focus; correct activation; modal contains focus and returns it on close. | Blocked - browser automation unavailable. |
| T33 | About Me: Lighthouse Accessibility | Audit live about.html with the Lighthouse procedure above in light and dark themes; record both scores and version. | Score at least 90/100 in each theme; review findings. | Blocked - Lighthouse not run; no score. |
| T34 | Projects: phone | Open live projects.html at 390 x 844; inspect full page and dialog; activate navigation and brand links. | Readable single-column layout; no overflow or overlap; correct destinations. | Blocked - browser automation unavailable. |
| T35 | Projects: laptop | Open live projects.html at 1366 x 768; inspect full page and dialog; activate navigation and brand links. | Balanced layout; readable text; correct links; no clipping. | Blocked - browser automation unavailable. |
| T36 | Projects: keyboard | Open live projects.html; Tab/Shift+Tab through every control; use Enter on skip link, navigation, theme, Contact me and Close; test Escape. | All controls reachable; visible focus; correct activation; modal contains focus and returns it on close. | Blocked - browser automation unavailable. |
| T37 | Projects: Lighthouse Accessibility | Audit live projects.html with the Lighthouse procedure above in light and dark themes; record both scores and version. | Score at least 90/100 in each theme; review findings. | Blocked - Lighthouse not run; no score. |
| T38 | Skills: phone | Open live skills.html at 390 x 844; inspect full page and dialog; activate navigation and brand links. | Readable single-column layout; no overflow or overlap; correct destinations. | Blocked - browser automation unavailable. |
| T39 | Skills: laptop | Open live skills.html at 1366 x 768; inspect full page and dialog; activate navigation and brand links. | Balanced layout; readable text; correct links; no clipping. | Blocked - browser automation unavailable. |
| T40 | Skills: keyboard | Open live skills.html; Tab/Shift+Tab through every control; use Enter on skip link, navigation, theme, Contact me and Close; test Escape. | All controls reachable; visible focus; correct activation; modal contains focus and returns it on close. | Blocked - browser automation unavailable. |
| T41 | Skills: Lighthouse Accessibility | Audit live skills.html with the Lighthouse procedure above in light and dark themes; record both scores and version. | Score at least 90/100 in each theme; review findings. | Blocked - Lighthouse not run; no score. |
| T42 | Contact: phone | Open live contact.html at 390 x 844; inspect full page and dialog; activate navigation and brand links. | Readable single-column layout; no overflow or overlap; correct destinations. | Blocked - browser automation unavailable. |
| T43 | Contact: laptop | Open live contact.html at 1366 x 768; inspect full page and dialog; activate navigation and brand links. | Balanced layout; readable text; correct links; no clipping. | Blocked - browser automation unavailable. |
| T44 | Contact: keyboard | Open live contact.html; Tab/Shift+Tab through every control; use Enter on skip link, navigation, theme, Contact me and Close; test Escape. | All controls reachable; visible focus; correct activation; modal contains focus and returns it on close. | Blocked - browser automation unavailable. |
| T45 | Contact: Lighthouse Accessibility | Audit live contact.html with the Lighthouse procedure above in light and dark themes; record both scores and version. | Score at least 90/100 in each theme; review findings. | Blocked - Lighthouse not run; no score. |

## JavaScript and additional live checks

Rows T46-T59 must each be repeated on Home, About Me, Projects, Skills, and Contact. Their current result is blocked on all five pages.

| ID | What is tested | Steps | Expected result | Actual result |
| :-- | :-- | :-- | :-- | :-- |
| T46 | System theme on initial load | Clear saved theme; emulate light, then dark system preference; reload each time. | Theme follows system; toggle names the alternate theme. | Blocked - browser automation unavailable. |
| T47 | Live system-theme change | With no saved preference, change emulated system scheme while page stays open. | Page and toggle update immediately. | Blocked - browser automation unavailable. |
| T48 | Theme toggle | Click Dark mode, then Light mode. | Colors and button label change correctly in both directions. | Blocked - browser automation unavailable. |
| T49 | Saved preference | Select dark; reload and visit each other page; change system scheme; repeat with light. | Explicit selection persists and overrides system preference. | Blocked - browser automation unavailable. |
| T50 | Storage unavailable and invalid saved value | In a disposable browser profile block site storage; test toggle and reload. Separately set charlie-theme to an unsupported value and reload. | No script error; toggle works on current page; unsupported value falls back to system theme. | Blocked - browser automation unavailable. |
| T51 | Footer year | Load page and scroll to footer; compare year to browser date. | Footer displays browser's current year. | Blocked - rendered JavaScript output not observed. |
| T52 | Contact dialog open and close | Activate Contact me; use Close; reopen and press Escape. | Dialog opens and closes by both methods; focus returns to opener. | Blocked - browser automation unavailable. |
| T53 | Invalid form: empty values | Open dialog; leave both fields empty; choose Prepare email. | Required-field validation prevents draft creation; no message is sent. | Blocked - browser automation unavailable. |
| T54 | Invalid form: one missing field | Submit with subject only; repeat with message only. | Missing required field is identified; draft remains hidden. | Blocked - browser automation unavailable. |
| T55 | Invalid form: whitespace only | Enter spaces in both fields; submit; repeat with only one whitespace field. | Status says Please enter a subject and message; draft remains hidden. | Blocked - browser automation unavailable. |
| T56 | Valid form and URL encoding | Enter subject Testing & feedback and message Hello Charlie! with a second line; submit; inspect draft link without opening it. | Draft becomes visible and focused; mailto recipient is Cja69@njit.edu; subject/body are encoded correctly; status invites review and sending in email app. | Blocked - browser automation unavailable. |
| T57 | Editing invalidates old draft | Prepare a valid draft, then edit either field; prepare again. | Old draft hides and status clears on input; new draft reflects latest values. | Blocked - browser automation unavailable. |
| T58 | Length limits | Paste 151 subject characters and 2001 message characters; inspect retained lengths; submit valid boundary values of 150 and 2000. | Input cannot exceed limits; boundary values can prepare a draft. | Blocked - browser automation unavailable. |
| T59 | No-JavaScript fallback | Disable JavaScript in disposable test profile; reload; activate Contact me; inspect navigation and footer. | Contact link retains mailto destination; navigation works; theme button stays hidden; static footer remains readable. | Blocked - browser automation unavailable. |
| T60 | Shared live resources | GET styles.css?v=5 and script.js?v=5 from live site. | Both return HTTP 200. | Pass - both returned HTTP 200. |
| T61 | Live project images | GET assets/portfolio.svg, assets/python-fundamentals.svg, and assets/data-manipulation.svg. | All three return HTTP 200. | Pass - all three returned HTTP 200; visual rendering not checked. |
| T62 | Live project downloads | GET projects/assignment-1-python-fundamentals.ipynb and projects/assignment-2-data-manipulation.py. | Both return HTTP 200. | Pass - both returned HTTP 200; browser download interaction not checked. |
| T63 | Primary page headings | Fetch all five live pages; count h1 elements in each response. | Exactly one h1 on every page. | Pass - one h1 on each page. |

## Failure and retest log

Keep the original result when a site test fails. Fix the defect, commit and deploy the fix, wait for GitHub Pages to publish, then repeat the same steps on the live URL. Append a row with the original failure and the retest outcome; do not replace the original Fail with Pass.

| Test / attempt | Original result | Change or recovery | Retest result |
| :-- | :-- | :-- | :-- |
| Test infrastructure: live HTTP access | Blocked - restricted request failed with connection error. | Retried with approved network access. | Pass - all 25 navigation requests and seven resource requests completed with HTTP 200. |
| Test infrastructure: interactive browser | Blocked - browser access host unavailable. | Attempted native Chrome fallback. | Blocked - Computer Use stopped because current browser URL could not be determined confidently; no interactive site verdict. |
| T29: Home Lighthouse | Blocked - PageSpeed Insights returned HTTP 429. | No website change warranted by an audit-service error. | Not run; no Lighthouse score available. |

No executed site check failed. The blocked tests still require execution before the assignment's full testing requirement is met. For any future defect, add: test ID, page, initial Fail evidence, fix commit, live retest date, and Pass/Fail result. Attach or link actual Lighthouse reports when available.
