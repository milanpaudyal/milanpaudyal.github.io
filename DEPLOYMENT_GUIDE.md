# GitHub Pages Deployment Guide

## Issues Fixed

I've resolved the deployment errors you were experiencing:

1. **Removed problematic theme.css imports** - The main issue was importing non-existent Radix UI color files
2. **Cleaned up CSS structure** - Consolidated all styles into `main.css` and `index.css`
3. **Added proper GitHub Actions workflow** - For automated deployment
4. **Updated Vite configuration** - Added base path for GitHub Pages

## Steps to Deploy

### 1. Update Repository Name in Vite Config

In `vite.config.ts`, change the base path to match your repository name:

```typescript
base: process.env.NODE_ENV === 'production' ? '/your-repo-name/' : '/',
```

Replace `your-repo-name` with your actual GitHub repository name.

### 2. Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to Settings → Pages
3. Select "GitHub Actions" as the source
4. The workflow will automatically deploy when you push to main

### 3. Build Locally (Optional)

To test the build locally:

```bash
npm run build
npm run preview
```

## Files Modified

- ✅ `src/main.css` - Cleaned up and consolidated CSS imports
- ✅ `src/index.css` - Simplified to only portfolio-specific styles
- ✅ Removed `src/styles/theme.css` - This was causing the import errors
- ✅ Added `.github/workflows/deploy.yml` - GitHub Actions workflow
- ✅ Updated `vite.config.ts` - Added base path configuration

## Common Issues & Solutions

### MIME Type Error
**Fixed** - This was caused by importing non-existent CSS files. All imports are now clean.

### 404 Errors for CSS Files
**Fixed** - Removed all problematic @radix-ui/colors imports that don't exist in the project.

### Module Script Loading Error
**Fixed** - The GitHub Actions workflow now properly builds and serves the TypeScript files as JavaScript modules.

## Verification

After deployment, your portfolio should be accessible at:
`https://yourusername.github.io/your-repo-name/`

The site now uses a clean, consolidated CSS structure with proper theme variables that work across both light and dark modes.