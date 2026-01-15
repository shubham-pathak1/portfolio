# Portfolio

A personal web portfolio developed to showcase software engineering projects and professional experience. This application is built with React and TypeScript, leveraging Vite for optimized build performance and Framer Motion for interface interactions.

## Technical Stack

- **Core**: React 18, TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS, CSS Modules
- **State/Animation**: Framer Motion, Lenis (Scroll Smoothing)
- **Routing**: React Router DOM (Client-side routing)

## Project Structure

The codebase is organized to separate concerns between UI components, data layers, and page logic:

- `src/components`: Reusable UI elements (cards, layout wrappers, navigation).
- `src/sections`: Logical page sections (Experience, Projects, Hero).
- `src/data`: Static data definitions for projects and experience to decouple content from markup.
- `src/pages`: Route-level entry points (Home, ProjectDetail).

## Features

- **Adaptive Design**: Fully responsive layout optimized for mobile, tablet, and desktop viewports.
- **Dark Mode Support**: System-aware theme preferences with manual override.
- **Project Detail Views**: Dedicated routes for deeper case studies of key projects.
- **Performance Optimized**: Lazy loading of assets and route splitting to minimize initial bundle size.

## Local Development

To run this project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/shubham-pathak1/portfolio.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Contact

For professional inquiries or collaboration:

- **Email**: shubhamxkcd@gmail.com
- **GitHub**: https://github.com/shubham-pathak1