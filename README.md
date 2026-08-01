# Md Farhan Rahman Anik — Portfolio

A polished, responsive personal portfolio for Md Farhan Rahman Anik. The site presents a professional profile, technical skills, six selected projects, verified professional experience, education, certifications, and contact details in a modern dark interface.

## Features

- Warm editorial dark design with orange accents and selected lime highlights
- Responsive layout for desktop, laptop, tablet, and mobile
- Compact sticky navigation with active section highlighting
- Editorial identity-card hero with oversized professional-title typography
- Scroll reveal animations powered by `IntersectionObserver`
- Filterable 40-card technical toolkit organized into nine verified categories, without artificial proficiency percentages
- Six compact, responsive editorial project rows
- Professional experience timeline covering Tech One Global Ltd, Linux Pathshala Ltd, and CREbsol Ltd
- Concise education and certification sections
- Static contact form with direct email, GitHub, and LinkedIn access
- Accessibility basics, including semantic HTML, keyboard support, focus states, and reduced-motion support
- No frameworks, packages, build tools, or external JavaScript
- Locally hosted display/body fonts and technology icons with no runtime font or icon CDN dependency

## Design Direction

The site uses an original warm editorial design with brown-black surfaces, off-white typography, orange interaction accents, selected lime technology tiles, oversized uppercase headings, a paper-like profile card, compact project rows, and lightweight motion. The public Sawad Framer portfolio was used only as broad visual inspiration for composition, hierarchy, and professional storytelling. No source code, text, branding, images, projects, or proprietary assets were copied.

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript

## Folder Structure

```text
farhan-portfolio/
├── assets/
│   ├── fonts/
│   │   ├── archivo-black/
│   │   │   ├── archivo-black-latin-400-normal.woff2
│   │   │   ├── archivo-black-latin-ext-400-normal.woff2
│   │   │   └── OFL.txt
│   │   └── manrope/
│   │       ├── manrope-latin-wght-normal.woff2
│   │       ├── manrope-latin-ext-wght-normal.woff2
│   │       └── OFL.txt
│   ├── images/
│   │   ├── branding/
│   │   ├── projects/
│   │   ├── stack/
│   │   │   ├── 28 local technology and brand SVGs
│   │   │   └── LICENSE-devicon.txt
│   │   ├── favicon.svg
│   │   ├── profile.jpg
│   │   └── responsive profile WebP variants
│   └── pdf/
│       └── Md_Farhan_Rahman_Anik_CV.pdf
├── index.html
├── impressum.html
├── datenschutz.html
├── styles.css
├── styles.min.css
├── script.js
├── script.min.js
├── portfolio-content.txt
└── README.md
```

## Run Locally

No installation or build command is required.

### Option 1: Open directly

Open `index.html` in any modern browser.

### Option 2: Use VS Code Live Server

1. Open this folder in VS Code.
2. Install the **Live Server** extension if it is not already installed.
3. Right-click `index.html`.
4. Select **Open with Live Server**.

## Deploy to GitHub Pages

1. Create a GitHub repository and push the contents of this folder to the repository root.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the `main` branch and the `/ (root)` folder.
5. Save the settings and wait for GitHub to publish the site.

The site uses relative paths and requires no build step, so it can be hosted directly from the repository root.

## Local Runtime Assets

The site self-hosts the two font families used by the current design:

- **Archivo Black** — normal 400, Latin and Latin Extended WOFF2 subsets
- **Manrope** — normal variable 400–800, Latin and Latin Extended WOFF2 subsets

Archivo Black uses `font-display: swap`, while Manrope uses `font-display: optional` to avoid a late mobile text repaint. Their SIL Open Font License files are stored beside the font files. Technology and brand marks used by the Tools section are sanitized local SVG files in `assets/images/stack/`, with the Devicon license included in that directory. Project previews, profile photography, education/certification branding, the favicon, and the CV are also served from local relative paths.

Ordinary links to GitHub, LinkedIn, Credly, project presentations, and email remain outbound links. They do not load third-party page assets before a visitor activates them.

## Customization

- Personal content is maintained in `portfolio-content.txt`.
- Verified professional experience is presented in reverse chronological order in both `portfolio-content.txt` and `index.html`.
- Main page structure and content are in `index.html`.
- Colors, spacing, responsive behavior, and visual effects are in `styles.css`.
- Navigation, scroll reveal, active links, and static form messaging are in `script.js`.
- `index.html` loads the pre-minified `styles.min.css` and `script.min.js` production copies for faster delivery; regenerate them after changing the source files.
- Replace the portrait or CV while preserving the current file paths, or update the references in `index.html`.

## Project Links

Each project card includes two external actions: GitHub opens the source-code repository, while Details opens the static project presentation hosted on GitHub Pages. Both links open in a new browser tab.

## Contact Form Note

The contact form is visual only. Submitting it is intercepted in the browser, no field values are transmitted or stored by the portfolio code, and a status message directs visitors to the separate email link. It can later be connected to a form service or a custom backend endpoint, but the privacy notice must be reviewed before that behavior changes.

## Legal Pages

- `impressum.html` — provider and contact information; deployed at `/webdev/impressum.html`
- `datenschutz.html` — German privacy notice with a short English summary; deployed at `/webdev/datenschutz.html`

Both routes use the same local fonts, favicon, theme, and relative paths as the main portfolio. The legal text is a source-grounded draft based on the supplied private contact details, the current browser-only form behavior, and GitHub’s current Pages and privacy documentation. It should be reviewed by a qualified German legal or privacy professional and updated whenever the hosting setup, contact form, external links, tracking behavior, or private/business status changes.
