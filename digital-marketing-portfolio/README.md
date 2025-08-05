# 🚀 Digital Marketing Portfolio Website

A modern, 3D-enhanced digital marketing portfolio website built with Next.js, featuring stunning animations, responsive design, and comprehensive service showcases.

## ✨ Features

### 🎨 Design & UX
- **3D Interactive Elements** - Three.js powered floating geometric shapes and particles
- **Dark/Light Mode** - Seamless theme switching with system preference detection
- **Responsive Design** - Mobile-first approach with beautiful layouts across all devices
- **Glass Morphism Effects** - Modern UI with backdrop blur and transparency
- **Gradient Animations** - Dynamic color transitions and animated backgrounds

### 🎭 Animations
- **Framer Motion** - Smooth page transitions and scroll-triggered animations
- **Scroll Animations** - Elements animate into view as users scroll
- **Hover Effects** - Interactive micro-animations on cards and buttons
- **Loading States** - Beautiful loading animations and transitions

### 📱 Pages & Sections
- **Hero Section** - 3D animated background with compelling call-to-action
- **Services** - Comprehensive service listings with detailed descriptions
- **Portfolio** - Project showcase with animated cards and filters
- **Testimonials** - Interactive carousel with client reviews
- **Contact** - Advanced contact form with validation and success states
- **About** - Company information and team details

### 🛠 Technical Features
- **Next.js 14** - Latest App Router with TypeScript support
- **Tailwind CSS** - Utility-first CSS framework with custom design system
- **SEO Optimized** - Meta tags, structured data, and performance optimized
- **Form Handling** - Advanced form validation and submission
- **Performance** - Optimized images, lazy loading, and efficient animations

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **3D Graphics**: Three.js + React Three Fiber
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: Next-themes
- **Deployment**: Vercel/Netlify ready

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd digital-marketing-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🏗 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── contact/           # Contact page
│   ├── services/          # Services page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/
│   ├── 3d/               # Three.js components
│   ├── layout/           # Layout components (nav, footer)
│   ├── providers/        # Context providers
│   ├── sections/         # Page sections
│   └── ui/               # Reusable UI components
└── lib/
    └── utils.ts          # Utility functions
```

## 🎨 Customization

### Colors & Themes
The design system uses CSS variables defined in `globals.css`. Customize colors by modifying:
- Primary colors in `:root` and `.dark` selectors
- Gradient configurations in Tailwind config
- Component-specific color schemes

### Animations
- Modify Framer Motion variants in section components
- Adjust Three.js scene parameters in `hero-scene.tsx`
- Customize CSS animations in `globals.css`

### Content
- Update service information in `services-section.tsx`
- Modify testimonials in `testimonials-section.tsx`
- Change contact information in footer and contact sections

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy with default settings

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify

### Manual Deployment
1. Build: `npm run build`
2. Export: `npm run export` (if needed)
3. Deploy the generated files

## 📊 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Bundle Size**: Optimized with dynamic imports and code splitting
- **Images**: Next.js Image component with optimization

## 🎯 Services Highlighted

1. **Web Development** - Custom websites and web applications
2. **E-commerce Solutions** - Online stores with payment processing
3. **Content Marketing** - Strategic content creation and campaigns
4. **SEO** - Search engine optimization and analytics
5. **Social Media Marketing** - Social media strategy and management

## 🔧 Development Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking
```

## 📝 Environment Variables

Create a `.env.local` file:
```env
# Contact form configuration
NEXT_PUBLIC_CONTACT_EMAIL=your-email@domain.com

# Analytics (optional)
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **Three.js** for 3D graphics capabilities
- **Framer Motion** for smooth animations
- **Lucide** for beautiful icons
- **Unsplash** for stock photography
- **Tailwind CSS** for rapid styling

---

**Built with ❤️ for the digital marketing community**

For questions or support, please contact: hello@digitalmarketing.com
