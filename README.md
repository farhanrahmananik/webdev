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
│   ├── images/
│   │   └── profile.jpg
│   └── pdf/
│       └── Md_Farhan_Rahman_Anik_CV.pdf
├── index.html
├── styles.css
├── script.js
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

## Customization

- Personal content is maintained in `portfolio-content.txt`.
- Verified professional experience is presented in reverse chronological order in both `portfolio-content.txt` and `index.html`.
- Main page structure and content are in `index.html`.
- Colors, spacing, responsive behavior, and visual effects are in `styles.css`.
- Navigation, scroll reveal, active links, and static form messaging are in `script.js`.
- Replace the portrait or CV while preserving the current file paths, or update the references in `index.html`.

## Project Links

Each project card includes two external actions: GitHub opens the source-code repository, while Details opens the static project presentation hosted on GitHub Pages. Both links open in a new browser tab.

## Contact Form Note

The contact form is visual only and does not submit data. It can later be connected to a form service or a custom backend endpoint.
