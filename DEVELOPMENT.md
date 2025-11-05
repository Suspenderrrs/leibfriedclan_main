# Development Guide

This document outlines the development workflow, setup, and best practices for working on the Leibfried Clan website.

## Prerequisites

### Required Software

- **Node.js 18+** - JavaScript runtime
- **npm** - Package manager (comes with Node.js)
- **Git** - Version control

### Verify Installation

```bash
node --version  # Should be 18.0.0 or higher
npm --version   # Should be 9.0.0 or higher
git --version   # Should be installed
```

## Initial Setup

### 1. Clone Repository

```bash
git clone <repository-url>
cd Website
```

### 2. Install Dependencies

```bash
npm install
```

This installs all project dependencies defined in `package.json`.

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.

## Common Commands

### Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server (after build)
npm start

# Run linter
npm run lint
```

### Development Server

- **URL**: http://localhost:3000
- **Hot Reload**: Automatically reloads on file changes
- **Fast Refresh**: Preserves React component state during updates

### Build Process

```bash
# Build the application
npm run build

# Output location: .next/
```

The build process:
1. Compiles TypeScript
2. Optimizes images
3. Generates static pages
4. Creates production bundles

## Development Workflow

### Daily Workflow

1. **Start development server**: `npm run dev`
2. **Make changes**: Edit files in `app/`, `components/`, etc.
3. **View changes**: Browser automatically refreshes
4. **Test changes**: Verify in browser
5. **Format code**: Auto-format with Prettier (if configured)
6. **Lint code**: Run `npm run lint` before committing

### File Changes

- **Components**: Edit files in `components/`
- **Pages**: Edit files in `app/`
- **Styles**: Edit `app/globals.css` or component styles
- **Config**: Edit config files as needed

### Hot Reload

Next.js automatically reloads when you save files:
- React components: Fast Refresh (preserves state)
- CSS: Instant updates
- Config files: May require server restart

## Code Style

### Prettier Configuration

The project uses Prettier for code formatting. Configuration in `.prettierrc`:

```json
{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 80,
  "arrowParens": "avoid"
}
```

**Key Settings**:
- No semicolons
- Single quotes
- 2-space indentation
- 80 character line width
- ES5 trailing commas
- No parentheses around single arrow function parameters

### ESLint Configuration

The project uses ESLint with Next.js configuration. Configuration in `.eslintrc.json`:

```json
{
  "extends": ["next/core-web-vitals", "next/typescript"]
}
```

**Rules**: Follows Next.js and TypeScript best practices.

### Code Style Guidelines

1. **Use TypeScript**: Always type your components and functions
2. **Use path aliases**: Import with `@/` prefix
3. **Follow naming conventions**: PascalCase for components, camelCase for functions
4. **Use Tailwind classes**: Prefer Tailwind over custom CSS
5. **Format before commit**: Ensure code is formatted with Prettier

### Formatting Code

**Manual Formatting**:
```bash
# If you have Prettier installed globally
prettier --write .

# Or via npx
npx prettier --write .
```

**Editor Integration**: 
- Configure your editor (VS Code, Cursor) to format on save
- Install Prettier extension for your editor

## Cursor IDE Tips

### Working with This Project

1. **Quick File Navigation**: 
   - `Cmd/Ctrl + P` to open file picker
   - Type file name to find it

2. **Search Codebase**:
   - `Cmd/Ctrl + Shift + F` to search across files
   - Use regex for advanced searches

3. **TypeScript Support**:
   - Hover over code to see types
   - `Cmd/Ctrl + Click` to navigate to definitions
   - Use autocomplete for imports

4. **AI Assistance**:
   - Use Cursor's AI to generate components following project patterns
   - Ask for code following the project's style guide
   - Use AI to refactor code

5. **Path Aliases**:
   - Cursor should recognize `@/` imports
   - Autocomplete should work with path aliases

### Cursor Shortcuts

- `Cmd/Ctrl + K` - Open command palette
- `Cmd/Ctrl + B` - Toggle sidebar
- `Cmd/Ctrl + \` - Split editor
- `Cmd/Ctrl + Shift + P` - Command palette

## Debugging

### Browser DevTools

1. **Open DevTools**: `F12` or `Cmd/Ctrl + Shift + I`
2. **Console**: Check for errors and logs
3. **Network**: Check API requests and responses
4. **Elements**: Inspect HTML and CSS

### Next.js Debugging

1. **Check Terminal**: Next.js logs errors in terminal
2. **Build Errors**: Run `npm run build` to catch build-time errors
3. **Lint Errors**: Run `npm run lint` to catch code issues

### Common Issues

**Port Already in Use**:
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use different port
npm run dev -- -p 3001
```

**Module Not Found**:
- Check import paths
- Verify file exists
- Check TypeScript path aliases

**Type Errors**:
- Run `npm run build` to see all type errors
- Check TypeScript configuration
- Verify types are imported correctly

## Environment Setup

### Environment Variables

Currently, the project doesn't use environment variables. If needed:

1. **Create `.env.local`**:
```bash
# .env.local
NEXT_PUBLIC_API_URL=https://api.example.com
```

2. **Access in Code**:
```typescript
const apiUrl = process.env.NEXT_PUBLIC_API_URL
```

3. **Add to `.gitignore`**:
```gitignore
.env*.local
```

**Note**: Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser.

### Git Configuration

**Recommended `.gitignore`**:
```
node_modules/
.next/
.env*.local
*.log
.DS_Store
```

## Build and Deployment

### Local Build

```bash
# Build for production
npm run build

# Test production build locally
npm start
```

### Deployment to Vercel

**Automatic Deployment**:
- Push to main branch
- Vercel automatically deploys
- Check deployment in Vercel dashboard

**Manual Deployment**:
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

**Configuration**: See `vercel.json` and [DOMAIN_SETUP.md](./DOMAIN_SETUP.md)

## Project Structure Reminders

### Key Directories

- `app/` - Next.js App Router pages and layouts
- `components/` - React components
- `lib/` - Utility functions (currently empty)
- `public/` - Static assets
- `Media Assets/` - Media files

### Key Files

- `app/layout.tsx` - Root layout with fonts and metadata
- `app/page.tsx` - Homepage
- `app/globals.css` - Global styles and Tailwind
- `components/RecipeModal.tsx` - Recipe submission modal
- `tailwind.config.ts` - Tailwind configuration
- `tsconfig.json` - TypeScript configuration

## Common Tasks

### Adding a New Component

1. Create file in `components/` directory
2. Add `'use client'` if needed
3. Define TypeScript interface for props
4. Use Tailwind classes for styling
5. Import and use in pages

See [COMPONENTS.md](./COMPONENTS.md) for detailed guide.

### Adding a New Page

1. Create file in `app/` directory
   - `app/about/page.tsx` for `/about` route
2. Export default component
3. Add metadata if needed
4. Link to page in navigation (if needed)

### Modifying Styles

1. **Global styles**: Edit `app/globals.css`
2. **Component styles**: Use Tailwind classes
3. **Brand colors**: Use `brand-red`, `brand-red-light`, etc.
4. **Custom animations**: Add to `globals.css` and use utility classes

See [STYLING.md](./STYLING.md) for detailed guide.

### Updating Dependencies

```bash
# Update a specific package
npm install package-name@latest

# Update all packages (check for breaking changes)
npm update

# Check for outdated packages
npm outdated
```

## Troubleshooting

### Development Server Won't Start

1. Check if port 3000 is in use
2. Delete `.next/` folder and try again
3. Delete `node_modules/` and run `npm install`
4. Check Node.js version (should be 18+)

### Build Errors

1. Run `npm run lint` to check for code issues
2. Check TypeScript errors: `npx tsc --noEmit`
3. Verify all imports are correct
4. Check for missing dependencies

### Styling Issues

1. Check Tailwind classes are correct
2. Verify `tailwind.config.ts` content paths
3. Check `globals.css` for missing imports
4. Restart dev server after config changes

### Type Errors

1. Check TypeScript configuration
2. Verify types are imported correctly
3. Check for missing type definitions
4. Run `npm run build` to see all errors

## Quick Reference

### Import Patterns

```typescript
// React hooks
import { useState, useEffect } from 'react'

// Next.js
import type { Metadata } from 'next'

// Components (using path alias)
import Component from '@/components/Component'

// Styles
import './styles.css'
```

### Common Tailwind Patterns

```tsx
// Responsive design
<div className="text-base sm:text-lg md:text-xl">

// Brand colors
<div className="bg-brand-red text-white">

// Animations
<div className="animate-fade-in">

// Hover states
<button className="hover:bg-white/90 transition-all">
```

## Related Documentation

- [STYLING.md](./STYLING.md) - Design system and styling patterns
- [COMPONENTS.md](./COMPONENTS.md) - Component patterns and usage
- [ARCHITECTURE.md](./ARCHITECTURE.md) - Project architecture and structure
- [DOMAIN_SETUP.md](./DOMAIN_SETUP.md) - Domain configuration

