import HeadObject from '../components/head'
import Nav from '../components/nav';

export default function Home() {
  return (
    <div className="dark:text-white dark:bg-black">
      <HeadObject />
      <Nav />

      <main>
        <section className="mx-auto flex flex-col w-fitcontent">
          <h1 className="text 4xl font-bold">Lorenzo Martinelli</h1>
          <p>Sarthak Hypeman</p>
        </section>
      </main>
    </div>
  )
}