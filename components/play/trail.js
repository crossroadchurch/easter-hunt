import Location from './location'

const Spacer = () => (
  <div className="py-4 my-2 ml-5 border-l-2 border-gray-200"></div>
)

export default ({ eggs }) => (
  <main className="container mx-auto p-4">
    <h2 className="font-bold text-2xl tracking-wide text-gray-700 mb-4">
      Trail
    </h2>
    <section>
      {eggs.filter(egg => egg.is_trail_node == true).map((egg) => {
        return (
          <div key={egg.egg_id}>
            <Location {...egg} />
            <Spacer />
          </div>
        )
      })}
    </section>
  </main>
)
