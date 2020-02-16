import Page from '../components/page'
import { useRouter } from 'next/router'
import { useLocalStorage } from 'react-use'

export default () => {
  const router = useRouter()
  const [team] = useLocalStorage('team')

  function proceed() {
    if (team) {
      router.push('/play')
    } else {
      router.push('/welcome')
    }
  }

  return (
    <Page>
      <div className="bg">
        <main className="max-w-sm mx-auto p-4 pt-12">
          <div className="min-h-screen bg-egg text-center pt-32 px-8">
            <h1 className="text-4xl font-bold mb-2 whitespace-no-wrap">
              The Egg Trail
            </h1>
            <p className="mb-4">
              Follow the trail and discover digital eggs along the way!
            </p>
            <button
              onClick={() => proceed()}
              className="w-full py-2 bg-teal-200 font-medium rounded-full"
            >
              Let's Go!
            </button>
          </div>
        </main>
      </div>
    </Page>
  )
}
