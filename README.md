# Leibfried Clan Website

A family recipe collection website built with Next.js 16, React 19, TypeScript, and Tailwind CSS.

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

Create an optimized production build:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Deployment

### Deploy to Vercel

The easiest way to deploy this Next.js app is to use [Vercel](https://vercel.com):

1. Push your code to a GitHub repository
2. Import your repository in [Vercel](https://vercel.com/new)
3. Vercel will automatically detect Next.js and configure the deployment
4. Your site will be live with automatic HTTPS and a custom domain option

### Manual Deployment

You can also deploy manually using the Vercel CLI:

```bash
npm i -g vercel
vercel
```

## Project Structure

```
/Website
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles + Tailwind imports
├── components/            # Reusable components
├── lib/                   # Utility functions
├── public/               # Static assets
└── ...config files
```

## Technologies

- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code linting
- **Prettier** - Code formatting

## Features

- **Recipe Submission Modal** - Embedded Google Form for recipe submissions
- **Responsive Design** - Mobile-first design with Tailwind CSS
- **Custom Brand Colors** - Red-based color palette
- **Custom Typography** - Dancing Script for headings, Inter for body text
- **Custom Animations** - Smooth fade-in and slide-up animations

## Documentation

Comprehensive developer documentation is available:

- **[DEVELOPMENT.md](./DEVELOPMENT.md)** - Development workflow, setup, and common commands
- **[ARCHITECTURE.md](./ARCHITECTURE.md)** - Project architecture, technology decisions, and structure
- **[COMPONENTS.md](./COMPONENTS.md)** - Component patterns, usage, and best practices
- **[STYLING.md](./STYLING.md)** - Design system, brand colors, typography, and Tailwind patterns
- **[DOMAIN_SETUP.md](./DOMAIN_SETUP.md)** - Domain configuration and Vercel setup

## Google Form Integration

The website includes a recipe submission modal that embeds a Google Form. The form URL is currently hardcoded in `components/RecipeModal.tsx`:

```
https://docs.google.com/forms/d/e/1FAIpQLSdcUOhlo5siATjpL6mrTZkAOV9NVFUWWPK5U6IyWTqbsr1u6A/viewform?embedded=true
```

**To update the form URL:**
1. Edit `components/RecipeModal.tsx`
2. Update the `src` attribute in the iframe (line 72)
3. Or consider moving it to an environment variable for easier updates

For more details, see [COMPONENTS.md](./COMPONENTS.md#recipemodal-component).

## Troubleshooting

### Development Server Won't Start

- **Port 3000 in use**: Kill the process or use a different port
  ```bash
  lsof -ti:3000 | xargs kill -9
  # Or use different port
  npm run dev -- -p 3001
  ```

- **Module not found**: Check import paths and verify files exist
- **Type errors**: Run `npm run build` to see all TypeScript errors

### Build Errors

- Run `npm run lint` to check for code issues
- Check TypeScript errors: `npx tsc --noEmit`
- Verify all imports are correct
- Check for missing dependencies

### Styling Issues

- Verify Tailwind classes are correct
- Check `tailwind.config.ts` content paths include your files
- Ensure `globals.css` has Tailwind imports
- Restart dev server after config changes

### Common Issues

**Hot reload not working**: 
- Restart the dev server
- Check for syntax errors in files
- Clear `.next/` folder and restart

**Type errors after adding new files**:
- Restart TypeScript server in your editor
- Run `npm run build` to verify types

**Styles not applying**:
- Check Tailwind config content paths
- Verify class names are correct
- Check browser console for errors

For more troubleshooting tips, see [DEVELOPMENT.md](./DEVELOPMENT.md#troubleshooting).

## Cursor IDE Tips

When working with this project in Cursor:

- **Path Aliases**: Use `@/` prefix for imports (e.g., `@/components/RecipeModal`)
- **Quick Navigation**: `Cmd/Ctrl + P` to find files
- **Search Codebase**: `Cmd/Ctrl + Shift + F` for global search
- **TypeScript Support**: Hover over code to see types, `Cmd/Ctrl + Click` to navigate
- **AI Assistance**: Use Cursor's AI to generate components following project patterns

For more Cursor-specific tips, see [ARCHITECTURE.md](./ARCHITECTURE.md#cursor-ide-tips) and [DEVELOPMENT.md](./DEVELOPMENT.md#cursor-ide-tips).

## Next Steps

- Add new pages in the `app/` directory
- Create reusable components in `components/`
- Add utility functions in `lib/`
- Customize styling with Tailwind CSS (see [STYLING.md](./STYLING.md))
- Add API routes if needed
- Consider moving Google Form URL to environment variable

