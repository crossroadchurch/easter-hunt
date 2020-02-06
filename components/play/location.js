import Egg from '../egg'

export default ({ location, three_words }) => (
  <div className="flex items-center">
    <div className="flex-shrink-0 mr-4">
      <Egg threeWords={three_words} />
    </div>
    <div className="w-full flex items-center justify-between">
      <div className="flex flex-col leading-tight">
        <h3>{location}</h3>
        <p className="text-sm text-gray-600">Egg #1</p>
      </div>
      <div>
        <a className="bg-green-200 px-4 py-2 text-sm font-medium rounded-lg whitespace-no-wrap ml-2">
          View Map
        </a>
      </div>
    </div>
  </div>
)
