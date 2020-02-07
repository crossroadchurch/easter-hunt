import { useState } from 'react'
import dynamic from 'next/dynamic'
import Router from 'next/router'
import { ChevronLeft } from 'react-feather'

const QrReader = dynamic(() => import('react-qr-reader'), { ssr: false })

export default () => {
  const [data, setData] = useState(null)

  function handleError(error) {
    console.error(error)
  }

  function handleScan(data) {
    if (data !== null) {
      try {
        const url = new URL(data)
        if (url.host === 'www.crossroad.org.uk') {
          const eggId = url.searchParams.get('egg')
          // @todo add egg to basket and check it's not already there
          Router.push(`/congrats?egg=${eggId}`)
        }
      } catch (e) {
        console.error('Oh no you didnt.')
      }
    }
    setData(data)
  }

  return (
    <main className="min-h-screen bg-black text-white p-4">
      <div className="container mx-auto">
        <nav>
          <button
            onClick={() => Router.back()}
            className="inline-flex items-center"
          >
            <ChevronLeft />
            <span>Back</span>
          </button>
        </nav>
        <header className="my-8">
          <h2 className="text-center font-semibold text-4xl">Scan an Egg</h2>
        </header>
        <section>
          <QrReader
            delay={300}
            onError={handleError}
            onScan={handleScan}
            style={{ width: '100%' }}
          />
          <p className="mt-8 text-white">Data: {data}</p>
        </section>
      </div>
    </main>
  )
}
