import Egg, { RawEgg } from '../egg'
import { useLocalStorage } from 'react-use'

export default ({ description, egg_id }) => {
  const [basket, setBasket] = useLocalStorage('basket', [])

  return (
    <div className="flex items-center">
      <div className="flex-shrink-0 mr-4">
        {basket.includes(egg_id) ? (
          <Egg id={egg_id} />
        ) : (
          <div class="w-10">
            <svg viewBox="0 0 750 1000">
              <path
                d="M 748.22738,617.27582 C 741.56542,739.09258 698.47008,870.65596 592.21291,940.93445 473.82988,1018.0025 313.27239,1017.289 189.727,952.56061 81.582452,896.47785 20.533549,778.14644 6.8101586,660.50444 -23.438768,447.93424 47.345632,215.92541 213.86979,75.307502 268.55076,31.399454 338.94205,-15.626627 412.23386,5.0056437 523.43044,41.3255 606.7546,133.82793 664.25447,232.45839 c 66.17223,115.96725 93.25951,252.07892 83.97291,384.81743 z"
                fill="#e8e8e8"
              ></path>
            </svg>
          </div>
        )}
      </div>
      <div className="w-full flex items-center justify-between">
        <h3>{description}</h3>
      </div>
    </div>
  )
}
