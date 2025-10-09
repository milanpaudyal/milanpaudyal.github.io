# Milan Paudyal - Portfolio

A modern, responsive portfolio website showcasing expertise in AI/ML Engineering and automation systems.

## 🚀 Quick Deploy to GitHub Pages

1. **Fork this repository** to your GitHub account
2. **Enable GitHub Pages**: Go to Settings → Pages → Source: "GitHub Actions"
3. **Push to main branch** - automatic deployment will start
4. **Visit your site** at `https://yourusername.github.io/repository-name`

That's it! Your portfolio will be live in minutes.

## ✨ Features

- **Modern Design**: Clean, professional interface with dark/light mode toggle
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Interactive Elements**: Smooth animations and engaging user experience
- **Project Showcase**: Detailed project information with modal dialogs
- **Contact Integration**: Built-in contact form with validation
- **Performance Optimized**: Fast loading and GitHub Pages ready

## 🛠 Tech Stack

- **Frontend**: React 19 with TypeScript
- **Styling**: Tailwind CSS v4 with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui
- **Icons**: Phosphor Icons
- **Animations**: Framer Motion
- **Build Tool**: Vite
- **Deployment**: GitHub Pages with GitHub Actions

## 💻 Local Development

### Prerequisites
- Node.js 18+
- npm

### Setup

1. **Clone the repository**:
```bash
git clone https://github.com/yourusername/your-portfolio.git
cd your-portfolio
```

2. **Install dependencies**:
```bash
npm install
```

3. **Start development server**:
```bash
npm run dev
```

4. **Open**: [http://localhost:5173](http://localhost:5173)

### Build for Production
```bash
npm run build
```

## 📝 Customization

### Update Your Information
Edit `src/App.tsx` to customize:
- Personal details and bio
- Skills and technologies
- Work experience
- Projects and achievements
- Education and certifications
- Contact information

### Theme Colors
Modify `src/index.css` to change the color scheme:

```css
:root {
  --primary: oklch(0.45 0.15 240);      /* Main brand color */
  --background: oklch(0.98 0.005 120);  /* Page background */
  /* ... customize other colors */
}
```

### Add Your Projects
Update the `projects` array in `src/App.tsx`:

```javascript
const projects = [
  {
    id: 1,
    title: 'Your Project Name',
    description: 'Brief description',
    tech: ['React', 'Python', 'AI'],
    details: 'Detailed project description...',
    achievements: [
      'Achievement 1',
      'Achievement 2'
    ]
  }
];
```

## 🔧 Deployment Details

The site is configured for GitHub Pages with:
- ✅ Automatic builds on push to main
- ✅ Proper asset handling for static hosting  
- ✅ Optimized production builds
- ✅ SEO meta tags included

See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for detailed instructions.

## 📁 Project Structure

```
src/
├── components/ui/       # shadcn/ui components
├── lib/                # Utility functions  
├── assets/             # Images and static files
├── App.tsx             # Main application
├── index.css           # Styles and theme
└── main.tsx            # Entry point
```

## 🐛 Troubleshooting

**Site not loading?**
- Check GitHub Actions tab for build status
- Ensure GitHub Pages is enabled in repository settings
- Verify the repository is public (for free GitHub accounts)

**Styling issues?**
- Tailwind CSS is bundled in the build - no external CDN needed
- Check browser console for any JavaScript errors

**Need help?** Open an issue with details about the problem.

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 📧 Contact

Milan Paudyal - [milanpaudyal43@gmail.com](mailto:milanpaudyal43@gmail.com)