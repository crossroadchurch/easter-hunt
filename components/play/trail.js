import Location from './location'

export default () => (
  <main className="container mx-auto p-4">
    <h2 className="font-bold text-xl tracking-wide text-gray-700 mb-4">
      Trail
    </h2>
    <section>
      <Location name="Crossroad Centre" />
      <Location name="Lamp post" />
      <Location name="Green Triangle" />
      <Location name="Elizabeth Road" />
      <Location name="Harepath" />
      <Location name="Fire Station" />
    </section>
  </main>
)
