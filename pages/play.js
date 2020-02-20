import Header from '../components/play/header'
import Trail from '../components/play/trail'
import { eggs } from '../qr_codes/easter-data.json'
import Page from '../components/page'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useLocalStorage } from 'react-use'

export default () => {
  const router = useRouter()
  const [team] = useLocalStorage('team')

  useEffect(() => {
    if (!team) {
      router.push('/welcome')
    }
  }, [router])

  return (
    <Page title="Play">
      <Header />
      <Trail eggs={eggs} />
    </Page>
  )
}
