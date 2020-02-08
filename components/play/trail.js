import Location from './location'

const Spacer = () => (
  <div className="py-4 my-2 ml-5 border-l-2 border-gray-200"></div>
)

export default ({ eggs }) => {
  const trailEggs = eggs.filter((egg) => egg.is_trail_node == true)
  return (
    <main className="container mx-auto p-4">
      <h2 className="text-xl tracking-wide text-gray-700 mb-4">Trail</h2>
      <section>
        {trailEggs.map((egg, index) => {
          return (
            <div key={egg.egg_id}>
              <Location {...egg} />
              {index < trailEggs.length - 1 ? <Spacer /> : <span />}
            </div>
          )
        })}
      </section>
    </main>
  )
}
