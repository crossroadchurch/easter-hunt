import Header from '../components/play/header'
import Trail from '../components/play/trail'
import { eggs } from '../qr_codes/easter-data.json'

export default () => (
  <>
    <Header />
    <Trail eggs={eggs} />
  </>
)
