// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.status(200).json({ tweets: [
    {
      url: "https://twitter.com/sarthaktexas/status/1397653798919811080",
      tweet: "i am now participating in the read 100 books before the end of the year challenge between  @bettina_melton  and  @MrsHamiltonBHS  Smiling face with open mouth and smiling eyes i will beat both my teachers Sparkling heart"
    },
    {
      url: "https://twitter.com/sarthaktexas",
      tweet: "got a walkthrough earlier today and i’m super excited for this — i’ve been exploring this idea on clubhouse before but macbrennan just turned it into a project Star-struck"
    },
    {
      url: "https://twitter.com/sarthaktexas",
      tweet: "pranav is cooler than sarthak"
    }
  ]})
}
