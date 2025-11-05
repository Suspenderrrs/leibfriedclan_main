# Components Guide

This document outlines component patterns, structure, and best practices for the Leibfried Clan website.

## Component Structure

Components are located in the `components/` directory and follow Next.js App Router conventions.

### File Naming

- Use PascalCase for component files: `RecipeModal.tsx`
- One component per file
- Use `.tsx` extension for TypeScript React components

## Component Patterns

### Client Components

Components that use React hooks, event handlers, or browser APIs must be marked with `'use client'` directive.

**Example:**
```tsx
'use client'

import { useState } from 'react'

export default function MyComponent() {
  const [state, setState] = useState(false)
  // ...
}
```

### Server Components

Components without client-side interactivity are server components by default (no directive needed).

**When to use Server Components:**
- Static content
- Data fetching
- No interactivity needed
- Better performance (no JS bundle)

**When to use Client Components:**
- Event handlers (`onClick`, `onChange`, etc.)
- React hooks (`useState`, `useEffect`, etc.)
- Browser APIs (`window`, `document`, etc.)
- Third-party libraries that require client-side rendering

## RecipeModal Component

The `RecipeModal` component is a modal dialog that displays a Google Form for recipe submissions.

### Props

```typescript
interface RecipeModalProps {
  isOpen: boolean      // Controls modal visibility
  onClose: () => void  // Callback to close the modal
}
```

### Usage

```tsx
'use client'

import { useState } from 'react'
import RecipeModal from '@/components/RecipeModal'

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <button onClick={() => setIsModalOpen(true)}>
        Submit a Recipe
      </button>
      <RecipeModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  )
}
```

### Implementation Details

- **Google Form Integration**: Embeds a Google Form via iframe
  - Form URL: `https://docs.google.com/forms/d/e/1FAIpQLSdcUOhlo5siATjpL6mrTZkAOV9NVFUWWPK5U6IyWTqbsr1u6A/viewform?embedded=true`
  - This URL is currently hardcoded in the component
  
- **Body Scroll Lock**: Prevents background scrolling when modal is open
  - Uses `useEffect` to set `document.body.style.overflow`
  - Cleans up on unmount

- **Click Outside to Close**: Clicking the backdrop closes the modal
  - Uses `onClick` on backdrop div
  - Stops propagation on modal content

- **Accessibility**: 
  - Close button has `aria-label="Close modal"`
  - Modal has proper z-index layering

### Styling

The modal uses:
- Brand red borders (`border-4 border-brand-red`)
- Brand red header background
- White content area
- Responsive sizing (`max-w-4xl`, `max-h-[90vh]`)
- Custom animations (`slideUp`, `fadeIn`)

### Future Improvements

Consider:
- Making the Google Form URL configurable via environment variable
- Adding keyboard navigation (ESC to close)
- Adding focus trap for accessibility
- Adding loading state for iframe

## Creating New Components

### Step 1: Create the Component File

Create a new file in `components/` directory:

```tsx
// components/MyComponent.tsx
'use client' // or omit if it's a server component

interface MyComponentProps {
  // Define props here
}

export default function MyComponent({ }: MyComponentProps) {
  return (
    <div>
      {/* Component content */}
    </div>
  )
}
```

### Step 2: Follow Project Patterns

1. **Use TypeScript** for type safety
2. **Add `'use client'`** if component needs interactivity
3. **Use Tailwind classes** for styling (see [STYLING.md](./STYLING.md))
4. **Follow naming conventions** - PascalCase for components
5. **Export as default** - `export default function ComponentName`

### Step 3: Import and Use

```tsx
import MyComponent from '@/components/MyComponent'

export default function Page() {
  return <MyComponent />
}
```

## Component Best Practices

### 1. Props Interface

Always define TypeScript interfaces for component props:

```tsx
interface ButtonProps {
  label: string
  onClick: () => void
  variant?: 'primary' | 'secondary'
}

export default function Button({ label, onClick, variant = 'primary' }: ButtonProps) {
  // ...
}
```

### 2. Conditional Rendering

Use early returns for conditional rendering:

```tsx
export default function Modal({ isOpen, onClose }: ModalProps) {
  if (!isOpen) return null
  
  return (
    <div>
      {/* Modal content */}
    </div>
  )
}
```

### 3. Event Handlers

Use arrow functions for event handlers:

```tsx
<button onClick={() => handleClick()}>
  Click me
</button>

// Or pass the function directly if it doesn't need parameters
<button onClick={handleClick}>
  Click me
</button>
```

### 4. Styling with Tailwind

- Use responsive classes: `sm:`, `md:`
- Use brand colors: `bg-brand-red`, `text-white`
- Add transitions: `transition-all duration-300`
- Use hover states: `hover:bg-white/90`

### 5. Accessibility

- Add `aria-label` to icon buttons
- Use semantic HTML (`<button>`, `<nav>`, etc.)
- Ensure keyboard navigation works
- Maintain proper focus management

### 6. Performance

- Use server components when possible
- Lazy load heavy components if needed
- Optimize images with Next.js `Image` component
- Avoid unnecessary re-renders

## Component Organization

### Current Structure

```
components/
  └── RecipeModal.tsx
```

### Recommended Structure (for future growth)

```
components/
  ├── ui/              # Reusable UI components (Button, Card, etc.)
  ├── layout/          # Layout components (Header, Footer, etc.)
  ├── features/        # Feature-specific components
  └── RecipeModal.tsx  # Feature components at root level
```

## Common Patterns

### Modal Pattern

```tsx
'use client'

import { useEffect } from 'react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div
        className="relative z-10 bg-white rounded-lg"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  )
}
```

### Button Pattern

```tsx
interface ButtonProps {
  children: React.ReactNode
  onClick: () => void
  variant?: 'primary' | 'secondary'
}

export default function Button({ 
  children, 
  onClick, 
  variant = 'primary' 
}: ButtonProps) {
  const baseClasses = "px-8 py-3 rounded-lg font-bold uppercase tracking-wider transition-all duration-300"
  const variantClasses = variant === 'primary' 
    ? "bg-white text-brand-red hover:bg-white/90" 
    : "bg-brand-red text-white hover:bg-brand-red-dark"

  return (
    <button 
      className={`${baseClasses} ${variantClasses}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
```

## Testing Components

While the project doesn't currently have a testing setup, consider:

- Unit tests for component logic
- Integration tests for component interactions
- Visual regression tests for styling
- Accessibility testing

## Related Documentation

- [STYLING.md](./STYLING.md) - Styling patterns and design system
- [ARCHITECTURE.md](./ARCHITECTURE.md) - Project architecture and structure
- [DEVELOPMENT.md](./DEVELOPMENT.md) - Development workflow

