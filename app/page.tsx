'use client'

import { useState } from 'react'
import RecipeModal from '@/components/RecipeModal'

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-brand-red">
        <div className="max-w-4xl w-full text-center space-y-12">
          {/* Logo with Script and Block Typography */}
          <div className="relative inline-block animate-scale-in">
            <div className="space-y-2">
              <h1 className="text-6xl sm:text-7xl md:text-9xl font-script text-white font-semibold leading-none">
                Leibfried
              </h1>
              {/* Swoosh Element */}
              <div className="relative -mt-2 mb-2">
                <svg
                  className="w-full h-6 sm:h-8 md:h-12"
                  viewBox="0 0 400 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 25 Q200 5, 400 25"
                    stroke="white"
                    strokeWidth="4"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white tracking-wider uppercase font-sans">
                CLAN
              </h2>
            </div>
          </div>

          {/* Warm Family Messaging */}
          <div className="space-y-4 sm:space-y-6 animate-fade-in">
            <p className="text-xl sm:text-2xl md:text-3xl text-white font-light">
              Our Family Recipe Collection
            </p>
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed px-4">
              Welcome to our family kitchen! Share your favorite recipes, discover 
              treasured family traditions, and keep our culinary heritage alive for 
              generations to come.
            </p>
          </div>

          {/* Recipe Submission Button */}
          <div className="pt-4 animate-fade-in">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-8 sm:px-10 py-3 sm:py-4 bg-white text-brand-red rounded-lg font-bold text-base sm:text-lg uppercase tracking-wider hover:bg-white/90 transition-all shadow-2xl hover:shadow-white/50 hover:scale-105 transform duration-300"
            >
              Submit a Recipe
            </button>
          </div>

          {/* Decorative Elements */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 animate-slide-in-bottom hover:scale-105 transform">
              <div className="text-white text-3xl mb-2">👨‍👩‍👧‍👦</div>
              <h3 className="text-white font-bold text-lg mb-2">Family Recipes</h3>
              <p className="text-white/80 text-sm">
                Recipes passed down through generations
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 animate-slide-in-bottom hover:scale-105 transform" style={{ animationDelay: '0.1s' }}>
              <div className="text-white text-3xl mb-2">🍳</div>
              <h3 className="text-white font-bold text-lg mb-2">Share & Discover</h3>
              <p className="text-white/80 text-sm">
                Add your favorites and explore new dishes
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 animate-slide-in-bottom hover:scale-105 transform" style={{ animationDelay: '0.2s' }}>
              <div className="text-white text-3xl mb-2">❤️</div>
              <h3 className="text-white font-bold text-lg mb-2">Family Traditions</h3>
              <p className="text-white/80 text-sm">
                Keep our culinary heritage alive
              </p>
            </div>
          </div>
        </div>
      </main>
      <RecipeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
