# Leibfried Clan Website

A placeholder website built with Next.js 14+, TypeScript, and Tailwind CSS.

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

- **Next.js 14+** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code linting
- **Prettier** - Code formatting

## Next Steps

- Add new pages in the `app/` directory
- Create reusable components in `components/`
- Add utility functions in `lib/`
- Customize styling with Tailwind CSS
- Add API routes if needed

