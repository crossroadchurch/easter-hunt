import { Camera } from 'react-feather'
import Link from 'next/link'

export default () => (
  <header className="bg-yellow-200">
    <div className="container mx-auto p-4">
      <nav className="flex items-center justify-between">
        <Link href="/help">
          <a className="font-medium underline">Need Help?</a>
        </Link>
        <Link href="/scan">
          <a className="inline-flex items-center bg-white px-4 py-1 border-2 border-black rounded-full">
            <Camera size="24" />
            <span className="ml-2">Scan an Egg</span>
          </a>
        </Link>
      </nav>
      <section className="flex flex-col text-center my-8 leading-tight">
        <span className="font-bold text-5xl">5</span>
        <span className="font-medium text-lg">Eggs Found</span>
      </section>
    </div>
  </header>
)
