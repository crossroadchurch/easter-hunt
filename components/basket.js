import { RawEgg } from '../components/egg'
import { basket_positions } from '../qr_codes/easter-data'

export default ({ found_eggs }) => {
  let basket_eggs = []
  for(let i=found_eggs.length-1; i >= 0; i--){
    basket_eggs.push({...found_eggs[i], ...basket_positions[i]})
  }

  return (
    <svg viewBox="0 0 5000 5000">
      {basket_eggs.map((egg) => {
        return (
          <RawEgg id={egg.egg_id} tx={egg.tx} ty={egg.ty} />
        )
      })}
    </svg>
  )
}
