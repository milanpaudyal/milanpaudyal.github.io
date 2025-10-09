# GitHub Pages Deployment Guide

## Overview
This portfolio is configured to deploy automatically to GitHub Pages using GitHub Actions.

## Setup Instructions

### 1. Repository Configuration
1. Fork or clone this repository to your GitHub account
2. Ensure the repository name matches your desired GitHub Pages URL
   - For username.github.io: Repository should be named `username.github.io`
   - For project pages: Any repository name will work at `username.github.io/repository-name`

### 2. GitHub Pages Settings
1. Go to your repository's Settings → Pages
2. Set Source to "GitHub Actions"
3. The workflow will automatically deploy on pushes to main branch

### 3. Automatic Deployment
- Every push to the `main` branch triggers an automatic build and deployment
- The site will be available at your GitHub Pages URL within a few minutes
- Check the Actions tab to monitor deployment progress

## Current Configuration

### Vite Configuration
- Base path set to `/` for root domain deployment
- Configured for production builds with proper asset handling
- Tailwind CSS integrated with proper theme configuration

### Build Process
1. Install dependencies with `npm ci`
2. Build the project with `npm run build`
3. Deploy the `dist` folder to GitHub Pages

## Troubleshooting

### Common Issues
1. **404 errors for assets**: Ensure vite.config.ts has correct base path
2. **MIME type errors**: GitHub Pages serves `.tsx` files correctly after build
3. **CSS not loading**: Tailwind is built into the bundle, no external CDN needed

### Local Development
```bash
npm install
npm run dev
```

### Manual Build
```bash
npm run build
npm run preview
```

## Features
- ✅ Responsive design
- ✅ Dark/light mode toggle with persistence
- ✅ Smooth animations and transitions
- ✅ Interactive project modals
- ✅ Contact form with validation
- ✅ SEO optimized
- ✅ GitHub Pages ready