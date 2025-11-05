# Architecture Guide

This document outlines the architecture, technology choices, and design decisions for the Leibfried Clan website.

## Project Overview

The Leibfried Clan website is a Next.js application built with TypeScript and Tailwind CSS. It serves as a family recipe collection platform with a simple, elegant design focused on recipe submissions.

## Technology Stack

### Core Technologies

- **Next.js 16.1** - React framework with App Router
  - Chosen for: Server-side rendering, file-based routing, built-in optimizations
  - App Router: Modern routing system with layouts and server components
  
- **React 19.0** - UI library
  - Latest version with improved performance and features
  
- **TypeScript 5.3** - Type safety
  - Configuration: Strict mode enabled
  - Path aliases: `@/*` maps to project root
  
- **Tailwind CSS 3.4** - Utility-first CSS framework
  - Custom theme with brand colors
  - Custom animations and utilities
  
### Development Tools

- **ESLint** - Code linting with Next.js config
- **Prettier** - Code formatting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## Project Structure

```
Website/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Homepage (client component)
│   ├── not-found.tsx       # 404 page
│   └── globals.css          # Global styles and Tailwind imports
├── components/             # React components
│   └── RecipeModal.tsx     # Recipe submission modal
├── lib/                    # Utility functions (currently empty)
├── public/                 # Static assets
├── Media Assets/           # Media files
├── .eslintrc.json          # ESLint configuration
├── .prettierrc             # Prettier configuration
├── next.config.js          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── vercel.json             # Vercel deployment configuration
```

## Design Decisions

### App Router vs Pages Router

**Choice**: App Router (Next.js 13+)

**Rationale**:
- Modern Next.js routing system
- Better support for Server Components
- Improved layout system
- Better performance with React Server Components

### Client vs Server Components

**Pattern**: Use Server Components by default, Client Components when needed

**Current Usage**:
- `app/page.tsx` - Client component (uses `useState` for modal)
- `app/layout.tsx` - Server component (font loading, metadata)
- `components/RecipeModal.tsx` - Client component (interactivity, hooks)

**Best Practice**: Start with Server Component, add `'use client'` only when needed.

### Font Loading

**Approach**: Google Fonts via Next.js font optimization

**Implementation**:
```tsx
import { Dancing_Script, Inter } from 'next/font/google'

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-dancing-script',
  weight: ['400', '500', '600', '700'],
})
```

**Benefits**:
- Automatic font optimization
- Self-hosting fonts
- CSS variable-based usage
- No layout shift

### Styling Approach

**Choice**: Tailwind CSS with custom theme

**Rationale**:
- Utility-first approach for rapid development
- Consistent design system via configuration
- Custom brand colors and typography
- Custom animations and utilities
- Small bundle size (JIT mode)

**Custom Extensions**:
- Brand color palette
- Custom font families
- Custom spacing values
- Custom animations

### TypeScript Configuration

**Settings**:
- Strict mode enabled
- Path aliases: `@/*` for imports
- Module resolution: `bundler` (Next.js default)
- Target: ES2017

**Benefits**:
- Type safety across the codebase
- Better IDE support
- Catch errors at compile time

## Key Features

### 1. Recipe Submission Modal

**Implementation**: Google Form embedded in iframe

**Current State**: Hardcoded Google Form URL

**Future Considerations**:
- Move URL to environment variable
- Add form validation
- Add success/error states
- Consider alternative form solutions

### 2. Responsive Design

**Approach**: Mobile-first with Tailwind breakpoints

**Breakpoints**:
- Base: Mobile (< 640px)
- `sm:` - Small screens (640px+)
- `md:` - Medium screens (768px+)

**Pattern**: Start with mobile styles, add larger screen styles progressively.

### 3. Domain Configuration

**Setup**: Vercel with custom domain

**Configuration**:
- `vercel.json` - Redirects www to non-www
- Custom domain: `leibfriedclan.com`
- Automatic HTTPS via Vercel

**Documentation**: See [DOMAIN_SETUP.md](./DOMAIN_SETUP.md)

## Development Workflow

### Cursor IDE Tips

1. **Path Aliases**: Use `@/` prefix for imports
   ```tsx
   import RecipeModal from '@/components/RecipeModal'
   ```

2. **TypeScript**: Let Cursor autocomplete and type-check
   - Hover over components to see types
   - Use Cmd/Ctrl + Click to navigate

3. **Code Generation**: Use Cursor's AI to:
   - Generate components following project patterns
   - Add TypeScript types
   - Create Tailwind classes

4. **Quick Navigation**: 
   - Cmd/Ctrl + P to find files
   - Cmd/Ctrl + Shift + F to search codebase

### File Organization

- **Components**: Keep in `components/` directory
- **Pages**: Use App Router file-based routing
- **Styles**: Global styles in `app/globals.css`, component styles via Tailwind
- **Utilities**: Place in `lib/` directory when needed

### Import Patterns

```tsx
// React and Next.js
import { useState } from 'react'
import type { Metadata } from 'next'

// Components (using path alias)
import RecipeModal from '@/components/RecipeModal'

// Styles
import './globals.css'
```

## Configuration Files

### next.config.js

```javascript
{
  reactStrictMode: true  // Enable React strict mode
}
```

**Purpose**: Next.js build configuration

### tailwind.config.ts

**Key Settings**:
- Content paths: `app/`, `components/`, `pages/`
- Custom theme: Brand colors, fonts, spacing
- Custom animations: fadeIn, slideUp, etc.

### tsconfig.json

**Key Settings**:
- Strict mode enabled
- Path aliases: `@/*` → `./*`
- Module resolution: `bundler`
- Target: ES2017

### vercel.json

**Purpose**: Vercel deployment configuration
- Build command
- Redirect rules (www → non-www)
- Region: `iad1` (US East)

## Performance Considerations

### Current Optimizations

1. **Font Optimization**: Next.js automatic font optimization
2. **Server Components**: Default to server components for better performance
3. **Image Optimization**: Next.js Image component (when used)
4. **Code Splitting**: Automatic with Next.js App Router

### Future Optimizations

- Add image optimization for Media Assets
- Implement lazy loading for heavy components
- Add service worker for offline support
- Consider ISR (Incremental Static Regeneration) for static content

## Security Considerations

### Current State

- No authentication required
- Google Form handles form submissions
- No user data stored locally

### Future Considerations

- If adding authentication: Use Next.js middleware
- If storing data: Use environment variables for secrets
- If adding API routes: Validate input and sanitize output

## Deployment

### Platform: Vercel

**Setup**:
- Automatic deployments from Git
- Custom domain configuration
- HTTPS automatic
- Environment variables support

**Configuration**: See `vercel.json` and [DOMAIN_SETUP.md](./DOMAIN_SETUP.md)

## Future Architecture Considerations

### Potential Additions

1. **API Routes**: For form submissions, data fetching
2. **Database**: For storing recipes (if moving away from Google Forms)
3. **Authentication**: If recipe editing becomes needed
4. **CMS Integration**: For content management
5. **Analytics**: For usage tracking

### Scalability

- Current: Simple static site with embedded form
- Future: May need API routes, database, or CMS
- Consider: Next.js middleware for routing logic
- Consider: Edge functions for serverless functionality

## Related Documentation

- [STYLING.md](./STYLING.md) - Design system and styling patterns
- [COMPONENTS.md](./COMPONENTS.md) - Component patterns and usage
- [DEVELOPMENT.md](./DEVELOPMENT.md) - Development workflow and setup
- [DOMAIN_SETUP.md](./DOMAIN_SETUP.md) - Domain configuration

