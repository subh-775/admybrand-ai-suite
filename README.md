# ADmyBRAND AI Suite - Landing Page

A modern, responsive SaaS landing page built with Next.js 14, TypeScript, and Tailwind CSS. This project showcases cutting-edge AI marketing tools with beautiful animations and interactive components.

### [**Hosted App**](https://admybrand-ai-suite-weld.vercel.app/)

## 🚀 Features

- **Modern Design**: 2025 design trends with glassmorphism and smooth animations
- **Responsive**: Perfect on desktop, tablet, and mobile devices
- **Interactive Components**: 8+ reusable UI components with hover effects
- **Smooth Animations**: Framer Motion powered animations and transitions
- **Performance Optimized**: Fast loading with Next.js optimization
- **TypeScript**: Fully typed for better development experience

## 📁 Project Structure

```
├── app/
│   ├── globals.css          # Global styles with Tailwind
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main page
├── components/
│   ├── ui/                  # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   └── Modal.tsx
│   ├── Hero.tsx             # Hero section
│   ├── Features.tsx         # Features showcase
│   ├── Pricing.tsx          # Pricing cards
│   ├── Testimonials.tsx     # Customer testimonials
│   ├── FAQ.tsx              # FAQ accordion
│   ├── Footer.tsx           # Footer with links
│   └── Navbar.tsx           # Navigation
├── lib/
│   └── utils.ts             # Utility functions
└── package.json
```

## 🛠 Installation & Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   npm start
   ```

4. **Deploy to HF-Space**
   - Upload all files to your HuggingFace Space
   - The project is configured with `output: 'export'` for static deployment

## 🎨 Components Overview

### Core UI Components
- **Button**: Multiple variants (primary, secondary, outline, ghost) with animations
- **Card**: Glass effect and hover animations
- **Input**: Form input with validation styling
- **Modal**: Animated modal with backdrop blur

### Page Sections
- **Hero**: Gradient background with floating elements and CTA
- **Features**: 8 feature cards with icons and descriptions
- **Pricing**: 3-tier pricing with toggle for monthly/annual
- **Testimonials**: Carousel with customer reviews and ratings
- **FAQ**: Collapsible accordion with smooth animations
- **Footer**: Newsletter signup and comprehensive links

## 🎯 Key Features

### Design Excellence
- Glassmorphism effects with backdrop blur
- Gradient text and backgrounds
- Smooth hover transitions
- Modern typography hierarchy
- Consistent 8px grid system

### Interactive Elements
- Animated hero elements
- Hover effects on cards
- Testimonial carousel with auto-play
- FAQ accordion animations
- Newsletter subscription with feedback

### Performance
- Optimized animations with Framer Motion
- Lazy loading for images
- Fast loading with Next.js
- Responsive design patterns

## 🔧 Technologies Used

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type safety and better DX
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Lucide React**: Icon library

## 📱 Responsive Breakpoints

- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px+

## 🎨 Color Palette

- **Primary**: Blue shades (#3b82f6)
- **Secondary**: Gray shades (#64748b)
- **Gradients**: Purple to blue combinations
- **Glass Effects**: White with opacity and blur

## 🚀 Deployment

The project is configured for static export and can be deployed to:
- HuggingFace Spaces
- Vercel
- Netlify
- GitHub Pages

## 📄 License

This project is created for the ADmyBRAND AI Coder hiring task.

---

**Built with ❤️ using AI-assisted development**
---


Check out the configuration reference at https://huggingface.co/docs/hub/spaces-config-reference