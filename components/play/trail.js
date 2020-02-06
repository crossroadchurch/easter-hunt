import Location from './location'

const Spacer = () => (
  <div class="py-4 my-2 ml-5 border-l-2 border-gray-200"></div>
)

export default ({ eggs }) => (
  <main className="container mx-auto p-4">
    <h2 className="font-bold text-xl tracking-wide text-gray-700 mb-4">
      Trail
    </h2>
    <section>
      {eggs.map((egg) => {
        return (
          <>
            <Location {...egg} />
            <Spacer />
          </>
        )
      })}
    </section>
  </main>
)
