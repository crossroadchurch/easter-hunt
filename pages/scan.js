import { useState } from 'react'
import dynamic from 'next/dynamic'
import Router from 'next/router'
import { ChevronLeft } from 'react-feather'

const QrReader = dynamic(() => import('react-qr-reader'), { ssr: false })

export default () => {
  const [data, setData] = useState(null)

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
          <QrReader delay={300} onScan={setData} style={{ width: '100%' }} />
        </section>
      </div>
    </main>
  )
}
