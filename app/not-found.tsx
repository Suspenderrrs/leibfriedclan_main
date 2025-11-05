export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="max-w-2xl w-full text-center space-y-8">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">404</h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400">
          Page Not Found
        </p>
        <p className="text-base md:text-lg text-gray-500 dark:text-gray-500">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <a
          href="/"
          className="inline-block mt-4 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
        >
          Go Home
        </a>
      </div>
    </div>
  )
}

