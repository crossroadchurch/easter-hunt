import Egg from '../egg'

export default ({ description, egg_id }) => (
  <div className="flex items-center">
    <div className="flex-shrink-0 mr-4">
      <Egg id={egg_id} />
    </div>
    <div className="w-full flex items-center justify-between">
      <div className="flex flex-col leading-tight">
        <h3>{description}</h3>
      </div>
      <div>
        <button className="bg-green-200 text-green-900 px-4 py-2 text-sm font-medium rounded-full whitespace-no-wrap ml-2">
          View Map
        </button>
      </div>
    </div>
  </div>
)
