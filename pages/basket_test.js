import Basket from '../components/basket'

export default () => {
  const found = [{egg_id: "02"}, {egg_id: "05"}, {egg_id: "26"}, {egg_id: "39"}]

  return (
    <main className="container">
      <Basket found_eggs={found} />
    </main>
  )
}
