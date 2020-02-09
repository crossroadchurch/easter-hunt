import { Map, Camera, Clipboard, Menu } from 'react-feather'
import Basket from '../../components/basket'
import Link from 'next/link'
import { useState } from 'react'

const foundEggs = Array(42)
  .fill(null)
  .map((_, index) => {
    return { egg_id: index.toString().padStart(2, '0') }
  })

export default () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="bg-white sticky top-0 shadow-sm">
        <div className="container p-4 mx-auto flex items-center justify-between">
          <h1 className="text-gray-800 text-lg">
            <button
              onClick={() => setOpen(!open)}
              className="font-medium inline-flex items-center text-xl"
            >
              <Menu className="mr-2" />
              <span>Menu</span>
            </button>
          </h1>
          <Link href="/scan">
            <a className="bg-white whitespace-no-wrap inline-flex items-center px-4 py-1 font-medium rounded-full border-2 border-gray-900">
              <Camera size="24" />
              <span className="ml-2">Scan an Egg</span>
            </a>
          </Link>
        </div>
        <div className={`${open ? 'block' : 'hidden'} border-t-2`}>
          <nav className="container mx-auto p-4 nav flex flex-col items-center justify-between">
            <Link href="/map">
              <a className="nav-item mb-4 bg-yellow-300">
                <Map size="20" />
                <span className="ml-2">View Map</span>
              </a>
            </Link>
            <Link href="/map">
              <a className="nav-item bg-purple-300">
                <Clipboard size="20" />
                <span className="ml-2">Leadboard</span>
              </a>
            </Link>
          </nav>
        </div>
      </div>
      <div className="bg-gray-200">
        <div className="container mx-auto p-4">
          <div className="my-8">
            <Basket className="max-w-sm mx-auto" found_eggs={foundEggs} />
          </div>
        </div>
      </div>
    </>
  )
}
