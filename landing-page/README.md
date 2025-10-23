# Memori Landing Page

Static marketing landing page starter for the Memori photo restoration product. Includes semantic HTML, handcrafted CSS, and a sprinkle of JavaScript for mobile navigation and FAQ behaviors.

## Project structure

```
landing-page/
├── index.html          # Main landing page markup
├── styles/
│   └── main.css        # Global styles and responsive layout
├── scripts/
│   └── main.js         # Mobile nav toggle, accordion, and utilities
└── assets/
    └── images/         # Placeholder directory for marketing imagery
```

## Getting started

1. Serve the page locally using any static file server. Examples:
   - `python3 -m http.server`
   - `php -S localhost:4000`
   - `npx serve`
2. Open `http://localhost:8000/landing-page/` (or the equivalent port) in your browser.

## Customization tips

- Replace the Unsplash URLs in `index.html` with production-ready assets. Drop local files into `assets/images/` and update the paths.
- Adjust the color palette by editing the CSS custom properties at the top of `styles/main.css`.
- Extend sections or add new components using the existing utility classes and layout patterns for consistency.
- If you adopt a build tool later, you can migrate the CSS into a preprocessor or utility framework while keeping the HTML structure.

## Accessibility and SEO

- Includes a skip link, semantic headings, and accessible navigation toggles.
- Add analytics, structured data, and meta tags as needed for your marketing stack.

---

Ready for further iteration—add animations, integrate a form backend, or wire up analytics as your next step.
