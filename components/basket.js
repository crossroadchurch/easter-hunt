import { RawEgg } from '../components/egg'
import { basket_positions, basket_levels } from '../qr_codes/easter-data'

let rim_path =
  'm 179.22745,4333.0769 c 2026.66705,148.021 4063.80475,155.6966 6090.28215,0 241.0988,5.0508 240.2085,442.2732 0,455.1355 C 4351.0662,4963.3212 2418.3011,4974.6858 498.41682,4814.2909 328.87955,4781.4596 56.622424,4851.5636 5.0203479,4626.4542 -15.79485,4504.313 25.437394,4329.0274 179.22745,4333.0769 Z'
let basket_path =
  'm 6273.0526,4765.8038 c -23.2517,450.2429 -358.8926,801.0758 -683.2039,1078.7267 -442.9388,394.2123 -1038.1184,552.5124 -1618.3243,583.5695 -613.3743,24.6587 -1232.0022,44.6824 -1842.345,-34.3379 -529.9429,-65.0566 -1034.67,-299.5318 -1417.19377,-673.4469 -281.2955,-271.0035 -570.19137,-620.9397 -535.64361,-1036.3412 35.91379,-304.3069 409.3483,-177.825 608.00357,-150.1839 442.02571,70.9335 892.07421,46.5272 1337.60941,77.2338 831.6815,38.3647 1666.123,44.6914 2495.3827,-40.0403 457.2658,-47.0352 916.9316,-65.4687 1374.4085,-106.3642 160.9139,-60.1902 349.9766,-36.5559 282.4501,182.2321 -0.6512,39.6475 -1.1566,79.2987 -1.1437,118.9523 z'

export default ({ found_eggs, className, teamName }) => {
  let basket_eggs = []
  for (let i = found_eggs.length - 1; i >= 0; i--) {
    basket_eggs.push({ ...found_eggs[i], ...basket_positions[i] })
  }
  const levels = basket_levels.filter(
    (level) => level.max_eggs >= found_eggs.length
  )

  return (
    <div>
      <h2 className="text-center text-3xl text-purple-700 font-bold mb-4">
        {teamName}
      </h2>
      <div className={`${className || ''} relative text-center`}>
        <svg viewBox={levels[0].view_box}>
          {basket_eggs.map((egg, index) => {
            return (
              <RawEgg key={index} id={egg.egg_id} tx={egg.tx} ty={egg.ty} />
            )
          })}
          <path d={basket_path} fill="#c87137" />
          <path d={rim_path} fill="#a05a2c" />
        </svg>
        <div
          style={{ marginBottom: '3%' }}
          className="absolute bottom-0 inset-x-0 text-center text-white font-semibold text-4xl"
        >
          {found_eggs.length > 0 ? found_eggs.length : ''}
        </div>
      </div>
    </div>
  )
}
