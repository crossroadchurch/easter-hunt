import { useRouter } from 'next/router'

export default ({ route_notes, cur_stage, x, y, w, h }) => {
  const router = useRouter()
  return (
    <div className="w-full flex items-center justify-between">
      <div className="py-4 px-8 my-2 ml-5 border-l-2 border-gray-200">
        <p className="leading-tight text-gray-700 text-base italic">
          {route_notes}
        </p>
      </div>
      <div>
        <button
          className="bg-green-200 text-green-900 px-4 py-2 text-sm font-medium rounded-full whitespace-no-wrap ml-2"
          onClick={() =>
            router.push(
              `/map?cur_stage=${cur_stage}&x=${x}&y=${y}&w=${w}&h=${h}`
            )
          }
        >
          View Map
        </button>
      </div>
    </div>
  )
}
