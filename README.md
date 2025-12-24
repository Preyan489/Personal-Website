# Personal Portfolio Website

A modern, responsive personal portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern and beautiful UI design
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Fast and performant
- 🎯 Smooth scrolling navigation
- 💫 Smooth animations and transitions
- 🎨 Customizable color scheme
- 🔍 SEO-friendly structure

## Sections

- **Hero**: Eye-catching introduction with call-to-action buttons
- **About**: Personal information and statistics
- **Skills**: Technology stack and proficiency levels
- **Projects**: Showcase of featured projects
- **Contact**: Contact form and social media links
- **Footer**: Additional navigation and information

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd Personal-Website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Customization

### Update Personal Information

1. **Hero Section** (`src/components/Hero.tsx`):
   - Update the name and title
   - Modify the description

2. **About Section** (`src/components/About.tsx`):
   - Update the about me text
   - Modify statistics (years of experience, projects, etc.)

3. **Skills Section** (`src/components/Skills.tsx`):
   - Add/remove skills and technologies
   - Adjust proficiency levels

4. **Projects Section** (`src/components/Projects.tsx`):
   - Replace placeholder projects with your own
   - Update GitHub and demo links

5. **Contact Section** (`src/components/Contact.tsx`):
   - Update email address
   - Update social media links (GitHub, LinkedIn, Twitter)

### Change Colors

Edit `tailwind.config.js` to customize the color scheme. The primary color is set to blue, but you can change it to any color you prefer.

### Add Images

Place images in the `public` folder and reference them in your components.

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Create React App** - Build tooling

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

Built from scratch with modern web development best practices.
