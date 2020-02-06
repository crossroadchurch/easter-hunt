export default ({ name }) => (
  <div className="flex items-center mb-8">
    <div className="flex-shrink-0 mr-4">
      <svg
        width="40"
        height="48"
        viewBox="0 0 40 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse cx="20" cy="24" rx="20" ry="24" fill="#E6E6E6" />
      </svg>
    </div>
    <div className="w-full flex items-center justify-between">
      <div className="flex flex-col leading-tight">
        <h3>{name}</h3>
        <p className="text-sm text-gray-600">Egg #1</p>
      </div>
      <div>
        <a className="bg-yellow-200 px-4 py-2 text-sm rounded-lg">View Map</a>
      </div>
    </div>
  </div>
)
