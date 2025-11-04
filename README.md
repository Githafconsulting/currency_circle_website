# Currency Circle - Landing Page

A modern, responsive single-page website for the Currency Circle mobile app - a peer-to-peer currency exchange platform.

## Features

- ✨ Modern, clean design with smooth animations
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Built with React, TypeScript, and Vite
- 🎨 Styled with Tailwind CSS
- 🚀 Optimized performance
- 🌊 Smooth scroll navigation

## Sections

1. **Hero** - Compelling headline with CTA
2. **Stats** - Impressive metrics and trust indicators
3. **Features** - 8 key features with icons
4. **How It Works** - 4-step process visualization
5. **App Showcase** - Phone mockups and screenshots
6. **Testimonials** - User reviews and ratings
7. **CTA** - Download section with app store buttons
8. **Footer** - Links, contact info, and social media

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Customization

### Adding App Screenshots

Replace the placeholder phone mockups in the following sections:
- Hero section (`src/components/Hero.tsx`)
- App Showcase section (`src/components/AppShowcase.tsx`)

Simply add your images to the `public` folder and update the image paths.

### Colors

The primary brand color is defined in `tailwind.config.js`:
- Primary: `#283577`
- Primary Light: `#3d4a99`
- Primary Dark: `#1e2656`

Modify these to match your brand colors.

### Content

Update the content in each component file located in `src/components/`:
- Stats and numbers
- Feature descriptions
- Testimonials
- Contact information

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Framer Motion** - Animations (ready to use)

## License

Proprietary - Currency Circle

## Support

For questions or support, contact: support@currencycircle.com
