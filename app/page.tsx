'use client'

import { useState } from 'react'
import RecipeModal from '@/components/RecipeModal'

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center p-8">
        <div className="max-w-2xl w-full text-center space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            Leibfried Clan
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400">
            Coming Soon
          </p>
          <p className="text-base md:text-lg text-gray-500 dark:text-gray-500">
            We&apos;re working on something amazing. Check back soon!
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-6 px-8 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl"
          >
            Submit a Recipe
          </button>
        </div>
      </main>
      <RecipeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
