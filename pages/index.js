import Link from 'next/link'
import Page from '../components/page'

export default () => (
  <Page>
    <div className="bg">
      <main className="container mx-auto min-h-screen flex items-center justify-center">
        <header className="text-center bg-white p-4 sm:p-8 rounded-lg shadow-lg">
          <h1 className="font-black text-5xl mb-4 leading-tight">
            THE GREAT EGG TRAIL
          </h1>
          <p className="mb-8">
            Follow the trail and discover digital eggs on the way. There are a
            possible 46 eggs to find into total. Best of luck!
          </p>
          <Link href="/play">
            <a className="bg-white text-gray-800 px-12 py-2 rounded-full border-2 border-gray-800 text-lg font-bold shadow-lg">
              Get Started
            </a>
          </Link>
        </header>
      </main>
    </div>
  </Page>
)
