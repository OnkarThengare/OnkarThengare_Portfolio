# Personal Portfolio (Nova UI)

A modern, high-performance personal portfolio built with **React**, **Tailwind CSS**, and **Vite**, replicating the clean aesthetic and glassmorphism styling of the Nova landing page.

---

## 🚀 Quick Start

To run the portfolio locally:

```bash
# Start Vite development server
npm run dev
```

Then open your browser at `http://localhost:3000` (or the port displayed in terminal).

To create a production build:

```bash
npm run build
```

---

## 🛠️ How to Customize Your Content

All data is decoupled into a single configuration file:
👉 **[`src/data/portfolioData.js`](file:///c:/Users/onkar/OneDrive/Desktop/Portfolio/src/data/portfolioData.js)**

- **Personal Info & Bio**: Update `personal.name`, `personal.role`, `personal.bio`, and contact links.
- **Projects**:
  - Add or update project titles, descriptions, tags, and images.
  - Your image `project-1.png` is placed in `public/project-1.png` and linked as the featured showcase project.
  - Drop any new project images into the `public/` directory and reference them as `"/your-image.png"`.
- **Tech Stack**:
  - Pre-configured with **HTML**, **CSS**, **Tailwind CSS**, **React**, **Spring**, **JavaScript**, **Spring Boot**, **Hibernate**, **Git**, and **Postman**.
- **Education**: Update degrees, universities, graduation years, and coursework.

---

## ✨ Features Included

- **One-Page Navigation**: Smooth scrolling navbar with active section detection for `#home`, `#about`, `#skills`, `#projects`, `#education`, and `#contact`.
- **Animated Developer Avatar**: Interactive animated character illustration with floating tech badges (React, Spring Boot, Hibernate) instead of personal photo.
- **Dark / Light Theme Toggle**: Seamless switch between dark mode (Nova dark purple/obsidian) and clean light mode.
- **Project Detail Modal**: Interactive popup showing project overview, technical highlights, GitHub code, and live demo links.
- **Frontend Contact Form**: Instant feedback state without requiring a backend server.
- **Fully Responsive**: Mobile drawer navigation and responsive grid layouts.
