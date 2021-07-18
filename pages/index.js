import HeadObject from '../components/head'
import Nav from '../components/nav';
import Tweet from "../components/tweet";
import useSwr from "swr"

export default function Home() {
  const { data, error } = useSwr("http://localhost:3000/api")

  let tweets = [];
  
  if (!data) {
    return <div>Loading...</div>
  }

  for (let i=0; i<data.tweets.length; i++) {
    tweets.push(
      <Tweet
        key = {i}
        text = {data.tweets[i].tweet}
        url = {data.tweets[i].url}
      />
    )
  }
  
  return (
    <div className="dark:text-white dark:bg-black">
      <HeadObject />
      <Nav />

      <main>
        <section className="mx-auto flex flex-col w-fitcontent">
          <h1 className="text 4xl font-bold">Lorenzo Martinelli</h1>
          <p>Sarthak Hypeman</p>
        </section>
        {/* <div>
          <Tweet text="sarthaks tweet 1" url="https:/twitter.com/SarthakTexas"/>
        </div> */}
        <div>
          {tweets}
        </div>
      </main>
    </div>
  )
}