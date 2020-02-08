import Header from '../components/play/header'
import Trail from '../components/play/trail'
import { eggs } from '../qr_codes/easter-data.json'
import Page from '../components/page'

export default () => (
  <Page title="Play">
    <Header />
    <Trail eggs={eggs} />
  </Page>
)
