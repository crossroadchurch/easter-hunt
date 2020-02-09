import Location from './location'
import Spacer from './spacer'
import { segments } from '../../qr_codes/easter-data'
import { route } from 'next/dist/next-server/server/router'

export default ({ eggs }) => {
  let trailEggs = []
  for (let i = 0; i < segments.length; i++) {
    let found = eggs.filter((egg) => egg.egg_id == segments[i].first_egg)[0]
    trailEggs.push({
      cur_stage: i.toString(),
      ...segments[i],
      ...found
    })
  }
  return (
    <main className="container mx-auto p-4">
      <h2 className="text-xl tracking-wide text-gray-700 mb-4">Trail</h2>
      <section>
        {trailEggs.map((egg, index) => {
          return (
            <div key={egg.egg_id}>
              <Location {...egg} />
              {index < trailEggs.length - 1 ? <Spacer {...egg} /> : <span />}
            </div>
          )
        })}
      </section>
    </main>
  )
}
