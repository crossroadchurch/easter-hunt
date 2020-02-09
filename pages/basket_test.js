import Basket from '../components/basket'
import { useState } from 'react'

export default () => {
  const [count, setCount] = useState(0)
  const [found, setFound] = useState([])

  function add_egg() {
    setCount((prev_count) => (prev_count + 1) % 43)
    if (count != 0) {
      setFound([...found, { egg_id: (count - 1).toString().padStart(2, '0') }])
    } else {
      setFound([])
    }
  }

  return (
    <main className="container">
      <button
        onClick={add_egg}
        className="bg-green-200 text-green-900 px-4 py-2 text-sm font-medium rounded-full whitespace-no-wrap ml-2"
      >
        Add an egg
      </button>
      <Basket found_eggs={found} />
    </main>
  )
}
