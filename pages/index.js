import Link from 'next/link'

export default () => (
  <div className="min-h-screen bg-red-400 text-white">
    <main className="container mx-auto p-4 py-12 text-center">
      <h1 className="font-black text-5xl mb-8">THE GREAT EGG TRAIL</h1>
      <p className="mb-8">
        Follow the trail and discover digital eggs on the way. There are a
        possible 46 eggs to find into total. Best of luck!
      </p>
      <Link href="/play">
        <a className="block bg-white text-gray-800 py-2 rounded-full border-2 border-gray-800 text-lg font-bold shadow-lg">
          Get Started
        </a>
      </Link>
    </main>
  </div>
)
