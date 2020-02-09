import { useRouter } from 'next/router'
import Egg from '../components/egg'
import Page from '../components/page'

export default () => {
  const router = useRouter()
  const { egg } = router.query

  return (
    <Page title="Congrats!">
      <main className="container mx-auto p-4">
        <div className="flex flex-col items-center py-12">
          <Egg id={egg} size="32" />
          <h1 className="font-bold text-2xl mt-4">You found an egg!</h1>
          <div className="mt-4">
            <button
              onClick={() => router.push('/play')}
              className="bg-green-200 px-8 py-2 rounded-full font-medium"
            >
              Back to the Trail
            </button>
          </div>
        </div>
      </main>
    </Page>
  )
}
