import Egg from '../components/egg'
import { eggs } from '../qr_codes/easter-data'

export default () => {
  return (
    <div className="flex flex-wrap">
      {Array(20)
        .fill(0)
        .map(() => {
          return eggs.map((egg) => {
            return <Egg threeWords={egg.three_words} className="p-1" />
          })
        })}
    </div>
  )
}
