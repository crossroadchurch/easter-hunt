import Egg from '../egg'

export default ({ location, egg_id }) => (
  <div className="flex items-center">
    <div className="flex-shrink-0 mr-4">
      <Egg id={egg_id} />
    </div>
    <div className="w-full flex items-center justify-between">
      <div className="flex flex-col leading-tight">
        <h3>{location}</h3>
        <p className="text-sm text-gray-600">Egg #1</p>
      </div>
      <div>
        <button className="bg-green-200 text-green-900 px-4 py-2 text-sm font-medium rounded-full whitespace-no-wrap ml-2">
          View Map
        </button>
      </div>
    </div>
  </div>
)
