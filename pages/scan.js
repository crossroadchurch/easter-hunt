import dynamic from 'next/dynamic'
import Router from 'next/router'
import Page from '../components/page'
import { useLocalStorage } from 'react-use'

const QrReader = dynamic(() => import('react-qr-reader'), { ssr: false })

export default () => {
  const [basket, setBasket] = useLocalStorage('basket', [])

  function handleError(error) {
    console.error(error)
  }

  function handleScan(data) {
    if (data !== null) {
      try {
        const url = new URL(data)
        if (url.host === 'www.crossroad.org.uk') {
          const eggId = url.searchParams.get('egg')
          if (basket.includes(eggId) == false) {
            setBasket((basket) => [...basket, eggId])
            Router.push(`/congrats?egg=${eggId}`)
          }
        }
      } catch (e) {
        console.error('Oh no you didnt.')
      }
    }
  }

  return (
    <Page title="Scan an Egg">
      <main className="min-h-screen bg-black p-4">
        <div className="container mx-auto">
          <nav className="my-8">
            <button
              onClick={() => Router.back()}
              className="bg-white shadow px-4 py-1 rounded-full inline-flex items-center"
            >
              <span>&larr; Back to the Trail</span>
            </button>
          </nav>
          <section>
            <QrReader
              delay={300}
              onError={handleError}
              onScan={handleScan}
              style={{ width: '100%' }}
            />
          </section>
        </div>
      </main>
    </Page>
  )
}
