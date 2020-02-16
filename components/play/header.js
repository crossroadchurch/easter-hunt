import { Map, Camera, Clipboard, Menu } from 'react-feather'
import Basket from '../../components/basket'
import Link from 'next/link'
import { useState } from 'react'
import { useLocalStorage } from 'react-use'

export default () => {
  const [team] = useLocalStorage('team')
  const teamName = team && team.name
  const [open, setOpen] = useState(false)
  const [basket, setBasket] = useLocalStorage('basket', [])
  const found = basket
    .map(({ id }) => ({
      egg_id: id
    }))
    .filter((egg) => egg)

  return (
    <>
      <div className="bg-white sticky top-0 shadow">
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
          <ul className="text-sm">
            <li>
              <span className="bg-blue-600 font-medium text-white px-1 rounded">
                Team: {teamName}
              </span>
            </li>
            <li>
              <span className="bg-blue-600 font-medium text-white px-1 rounded">
                Total Eggs: {found.length}
              </span>
            </li>
          </ul>
          <div className="my-8">
            <Basket className="max-w-sm mx-auto" found_eggs={found} />
          </div>
        </div>
      </div>
    </>
  )
}
