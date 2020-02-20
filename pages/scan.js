import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import Router from 'next/router'
import Page from '../components/page'
import { useLocalStorage } from 'react-use'

import initFirebase from '../lib/firebase'
initFirebase()

import firebase from 'firebase/app'
import 'firebase/firestore'
const db = firebase.firestore()

const QrReader = dynamic(() => import('react-qr-reader'), { ssr: false })

export default () => {
  const [egg, setEgg] = useState(null)
  const [basket, setBasket] = useLocalStorage('basket', [])
  const [team] = useLocalStorage('team')
  const moment = require('moment')

  useEffect(() => {
    // Right now, there is no way to simply append to
    // an array in a firestore document, so for now we will
    // just rewrite all eggs in localstorage to the document when we find
    // an new egg
    if (!egg) {
      return
    }

    const newBasket = [...basket, egg]
    db.collection('teams')
      .doc(team.id)
      .set({ eggs: newBasket }, { merge: true })
      .then(() => {
        setBasket(newBasket)
        Router.push(`/congrats?egg=${egg.id}`)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [egg])

  function handleError(error) {
    console.error(error)
  }

  function handleScan(data) {
    if (data !== null) {
      try {
        const url = new URL(data)
        if (url.host === 'www.crossroad.org.uk') {
          const eggId = url.searchParams.get('egg')
          const foundEggIds = basket.map(({ id }) => id)
          if (foundEggIds.includes(eggId) == false) {
            setEgg({
              id: eggId,
              found: moment().format('YYYY-MM-DD HH:mm:ss')
            })
          }
        }
      } catch (e) {
        console.log(e)
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
