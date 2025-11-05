# Styling Guide

This document outlines the design system, styling conventions, and Tailwind CSS patterns used in the Leibfried Clan website.

## Brand Colors

The project uses a red-based color palette defined in `tailwind.config.ts` and `app/globals.css`.

### Color Palette

- **`brand-red`** (`#DC2626`) - Primary brand color
  - Used for: Background, buttons, accents, borders
  - CSS variable: `--brand-red`
  
- **`brand-red-light`** (`#EF4444`) - Lighter variant
  - Used for: Hover states, lighter accents
  - CSS variable: `--brand-red-light`
  
- **`brand-red-dark`** (`#B91C1C`) - Darker variant
  - Used for: Button hover states, darker accents, modal borders
  - CSS variable: `--brand-red-dark`
  
- **`brand-white`** (`#FFFFFF`) - White
  - Used for: Text on red backgrounds, buttons, cards
  - CSS variable: `--brand-white`

### Usage Examples

```tsx
// Background color
<div className="bg-brand-red">

// Text color
<p className="text-white">

// Border color
<div className="border-4 border-brand-red">

// Hover states
<button className="bg-white hover:bg-white/90 text-brand-red">
```

## Typography

### Font Families

The project uses two Google Fonts loaded in `app/layout.tsx`:

1. **Dancing Script** (`--font-dancing-script`)
   - Used for: Main logo/heading ("Leibfried")
   - Weights: 400, 500, 600, 700
   - Tailwind class: `font-script`

2. **Inter** (`--font-inter`)
   - Used for: Body text, buttons, general UI
   - Default sans-serif font
   - Tailwind class: `font-sans`

### Typography Scale

- **Logo/Heading**: `text-6xl sm:text-7xl md:text-9xl` with `font-script`
- **Subheading**: `text-2xl sm:text-3xl md:text-5xl` with `font-bold uppercase`
- **Body Large**: `text-xl sm:text-2xl md:text-3xl`
- **Body**: `text-base sm:text-lg md:text-xl`
- **Small**: `text-sm`

### Usage Examples

```tsx
// Logo typography
<h1 className="text-6xl sm:text-7xl md:text-9xl font-script text-white">
  Leibfried
</h1>

// Subheading
<h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white tracking-wider uppercase font-sans">
  CLAN
</h2>

// Body text
<p className="text-base sm:text-lg md:text-xl text-white/90">
```

## Animations

Custom animations are defined in `app/globals.css` and can be applied using utility classes.

### Available Animations

1. **`animate-fade-in`**
   - Fades in from opacity 0 to 1
   - Duration: 0.6s
   - Use for: Content that should appear smoothly

2. **`animate-slide-up`**
   - Slides up from 20px below with fade
   - Duration: 0.4s
   - Use for: Modals, popups

3. **`animate-slide-in-bottom`**
   - Slides up from 30px below with fade
   - Duration: 0.5s
   - Use for: Cards, decorative elements

4. **`animate-scale-in`**
   - Scales from 0.95 to 1.0 with fade
   - Duration: 0.3s
   - Use for: Logo, hero elements

### Usage Examples

```tsx
// Fade in
<div className="animate-fade-in">

// Slide up (modal)
<div className="animate-slide-up">

// Staggered animations
<div className="animate-slide-in-bottom" style={{ animationDelay: '0.1s' }}>
```

## Tailwind CSS Patterns

### Responsive Design

The project uses mobile-first responsive design with breakpoints:
- Base: Mobile (default)
- `sm:` - Small screens (640px+)
- `md:` - Medium screens (768px+)

### Common Patterns

#### Spacing
- Use Tailwind's spacing scale (0.25rem increments)
- Custom spacing: `18` (4.5rem), `88` (22rem)

#### Opacity
- Text on colored backgrounds: `text-white/90` or `text-white/80`
- Hover states: `hover:bg-white/90`

#### Shadows
- Large shadows: `shadow-2xl`
- Colored shadows: `hover:shadow-white/50`

#### Transitions
- Standard: `transition-all duration-300`
- Hover transforms: `hover:scale-105 transform`

#### Backdrop Blur
- Glass morphism: `bg-white/10 backdrop-blur-sm`

### Component Styling Patterns

#### Buttons
```tsx
<button className="px-8 sm:px-10 py-3 sm:py-4 bg-white text-brand-red rounded-lg font-bold text-base sm:text-lg uppercase tracking-wider hover:bg-white/90 transition-all shadow-2xl hover:shadow-white/50 hover:scale-105 transform duration-300">
```

#### Cards
```tsx
<div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 transform">
```

#### Modals
```tsx
<div className="relative z-10 w-full max-w-4xl max-h-[90vh] bg-white rounded-lg shadow-2xl overflow-hidden border-4 border-brand-red">
```

## CSS Custom Properties

Global CSS variables are defined in `app/globals.css`:

```css
:root {
  --background: #DC2626;
  --foreground: #FFFFFF;
  --brand-red: #DC2626;
  --brand-red-light: #EF4444;
  --brand-red-dark: #B91C1C;
  --brand-white: #FFFFFF;
}
```

These are primarily used for Tailwind configuration, but can be accessed directly in CSS if needed.

## Best Practices

1. **Use Tailwind classes** instead of custom CSS when possible
2. **Follow responsive patterns** - always include mobile styles first
3. **Consistent spacing** - use Tailwind's spacing scale
4. **Animation timing** - keep animations subtle and fast (0.3-0.6s)
5. **Color consistency** - always use brand color classes, not hex values
6. **Opacity for overlays** - use `/90` or `/80` for text readability
7. **Transform on hover** - use `hover:scale-105` for interactive elements

## Custom Utilities

The project includes a custom utility class:

- **`text-balance`** - Text wrapping balance for better readability

