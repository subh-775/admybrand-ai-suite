# ADmyBRAND AI Suite - Landing Page

A modern, responsive SaaS landing page built with Next.js 14, TypeScript, and Tailwind CSS. This project showcases cutting-edge AI marketing tools with beautiful animations and interactive components.

This project is created for the ADmyBRAND AI Coder hiring task.

### [**Hosted App**](https://admybrand-ai-suite-subh.vercel.app/)

## 🚀 Features

- **Modern Design**: Design trends with glassmorphism and smooth animations
- **Responsive**: Perfect on desktop, tablet, and mobile devices
- **Interactive Components**: 8+ reusable UI components with hover effects
- **Smooth Animations**: Framer Motion powered animations and transitions
- **Performance Optimized**: Fast loading with Next.js optimization
- **TypeScript**: Fully typed for better development experience

## 📁 Project Structure

```
admybrand-ai-suite/
│
├── app/             # Next.js 13+ app directory
│ ├── globals.css    # Global styles and Tailwind classes
│ ├── layout.tsx     # Root layout wrapper
│ └── page.tsx       # Main landing page
│
├── components/      # Reusable UI components
│ ├── Hero.tsx
│ ├── Features.tsx
│ ├── Pricing.tsx
│ ├── Testimonials.tsx
│ ├── FAQ.tsx
│ ├── DemoSection.tsx
│ ├── Navbar.tsx
│ └── ThemeToggle.tsx
│
├── lib/           # Utility logic, constants, helpers
│
├── public/        # Static assets served as-is
│ └── mydemo.gif   # Demo animation shown on landing
│
├── .dockerignore  # Files ignored in Docker builds
├── .gitattributes # Git LFS config if any
├── Dockerfile     # Docker setup for production
├── docker-compose.yml # Local dev setup with Docker Compose
│
├── nginx.conf     # NGINX reverse proxy config (optional)
│
├── next.config.js # Next.js custom configuration
├── package.json # Project dependencies and scripts
├── postcss.config.js # PostCSS/Tailwind config
├── tailwind.config.js # Tailwind custom config
├── tsconfig.json # TypeScript configuration
│
├── README.md     # Project overview and instructions
├── LICENSE       # Open source license(Apache 2.0)
└── AI_USAGE_REPORT.pdf # AI usage evidence (Task B)
```

## 🐳 Run Locally via Docker
Make sure you have Docker installed.

1. Clone this repo
```bash
git clone https://github.com/subh-775/admybrand-ai-suite.git
cd admybrand-ai-suite
```

2. Build the Docker image
``` bash
docker build -t admybrand-ai .
```

4. Run the container
``` bash
docker run -p 7860:7860 admybrand-ai
```

Access your container at: http://localhost:7860

---


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

The project is configured for static export and is deployed at: **Vercel**

## 📄 License

Licensed Under Apache 2.0 License.

---

<p align="center"><strong>Built with ❤️ using AI-assisted development</strong></p>
