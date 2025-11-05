'use client'

import { useEffect } from 'react'

interface RecipeModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function RecipeModal({ isOpen, onClose }: RecipeModalProps) {
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
      style={{
        animation: 'fadeIn 0.2s ease-out',
      }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative z-10 w-full max-w-4xl max-h-[90vh] bg-white rounded-lg shadow-2xl overflow-hidden border-4 border-brand-red"
        onClick={(e) => e.stopPropagation()}
        style={{
          animation: 'slideUp 0.2s ease-out',
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 bg-brand-red border-b-4 border-brand-red-dark">
          <h2 className="text-2xl font-bold text-white uppercase tracking-wider font-sans">
            Submit a Recipe
          </h2>
          <button
            onClick={onClose}
            className="p-2 text-white hover:text-white/80 hover:bg-brand-red-dark rounded-full transition-colors"
            aria-label="Close modal"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Iframe Container */}
        <div className="relative w-full" style={{ height: 'calc(90vh - 80px)' }}>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdcUOhlo5siATjpL6mrTZkAOV9NVFUWWPK5U6IyWTqbsr1u6A/viewform?embedded=true"
            className="w-full h-full border-0"
            title="Recipe Submission Form"
            allow="fullscreen"
          />
        </div>
      </div>
    </div>
  )
}

