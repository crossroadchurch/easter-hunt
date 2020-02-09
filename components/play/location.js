import Egg from '../egg'

export default ({ description, egg_id }) => (
  <div className="flex items-center">
    <div className="flex-shrink-0 mr-4">
      <Egg id={egg_id} />
    </div>
    <div className="w-full flex items-center justify-between">
      <h3>{description}</h3>
    </div>
  </div>
)
