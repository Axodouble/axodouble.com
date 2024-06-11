import styles from "./page.module.css";
import { unstable_noStore as noStore } from 'next/cache';

export default function Home() {
  let quote = getRandomQuote();

  return (
    <main className={styles.main}>
      <a className={styles.a} href="https://axodouble.com/">
        <h1 className={styles.h1}>AXODOUBLE.COM</h1>
      </a>
      Welcome to axodouble.com, <a href='https://xdbl.dev/?l=0eSF3'>join</a> my <a href='https://xdbl.dev/?l=0eSF3'>discord</a>!<br /><br />
      <h3 className={styles.h3}>Random Quote.</h3>
      "<a className={styles.quote} href={quote.quote.link}>{quote.quote.text}</a>" - <a>{quote.user.text}</a>.
    </main>
  );
}

function getRandomQuote() {
  const quotes =
    [
      {
        "quote": { "text": "If you were a worm I would shake you every day until you die of a severe brain concussion.", "link": undefined },
        "user": { "text": "Jazzodouble", "link": undefined }
      },
      {
        "quote": { "text": "There is a price to pay for speaking the truth. There is a bigger price for living a lie.", "link": undefined },
        "user": { "text": "Miku", "link": undefined }
      },
      {
        "quote": { "text": "Men don't even know what they're doing half the time- like-", "link": undefined },
        "user": { "text": "Jazzodouble", "link": undefined }
      },
      {
        "quote": { "text": "It's getting pretty caucasian in here.", "link": undefined },
        "user": { "text": "Metshtival", "link": "https://metsh.tech/" }
      },
      {
        "quote": { "text": "Money can't buy back your youth when you're old, a friend when you're lonely, or peace to your soul.", "link": undefined },
        "user": { "text": "Johnny Cash", "link": undefined }
      },
      {
        "quote": { "text": "Can't shake the devil's hand and say you're only kidding.", "link": "https://www.youtube.com/watch?v=Ow-nuHCTA5E" },
        "user": { "text": "They Might Be Giants", "link": undefined }
      },
      {
        "quote": { "text": "A weapon does not decide whether or not to kill. A weapon is a manifestation of a decision that has already been made.", "link": "https://www.amazon.com/Cellist-Sarajevo-Steven-Galloway/dp/1594483655" },
        "user": { "text": "Steven Galloway", "link": undefined }
      },
      {
        "quote": { "text": "You can't call yourself peaceful if you're not capable of violence. If you're not capable of violence, you're not peaceful; you're harmless.", "link": undefined },
        "user": { "text": "Someone", "link": undefined }
      },
      {
        "quote": { "text": "I do believe that, where there is only a choice between cowardice and violence, I would advise violence.", "link": undefined },
        "user": { "text": "Mahatma Gandhi", "link": undefined }
      },
      {
        "quote": { "text": "Then there was the war, and I married it because there was nothing else when I reached the age of falling in love.", "link": "https://www.amazon.com/Forgotten-Soldier-Guy-Sajer/dp/1574882864" },
        "user": { "text": "Guy Sajer", "link": undefined }
      },
      {
        "quote": { "text": "I fear all we have done is to awaken a sleeping giant and fill him with a terrible resolve.", "link": undefined },
        "user": { "text": "Isoroku Yamamoto", "link": undefined }
      },
      {
        "quote": { "text": "Your mind will always shutdown before your body, only way to test your full potential is to get pushed to your limits.", "link": undefined },
        "user": { "text": "Galah", "link": undefined }
      },
      {
        "quote": { "text": "Despite all my beans, I'm still just a rat in some jeans.", "link": undefined },
        "user": { "text": "Jazzodouble", "link": undefined }
      },
      {
        "quote": { "text": "It is what it is.", "link": undefined },
        "user": { "text": "ZoliWorks", "link": undefined }
      },
      {
        "quote": { "text": "I hate the word homophobia. It's not a phobia. You're not scared. You're an asshole.", "link": undefined },
        "user": { "text": "Morgan Freeman", "link": undefined }
      },
      {
        "quote": { "text": "If you're not in the state of post-nut clarity, you're in state of pre-nut delusion.", "link": undefined },
        "user": { "text": "Taki", "link": undefined }
      },
      {
        "quote": { "text": "My doctrines exist to rid maternity hospitals of their horror, to preserve the wife for her husband and the mother for her child.", "link": "https://en.wikipedia.org/wiki/Ignaz_Semmelweis" },
        "user": { "text": "Ignaz Semmelweis", "link": undefined }
      },
      {
        "quote": { "text": "There is no real ending. It's just the place where you stop the story.", "link": undefined },
        "user": { "text": "Frank Herbert", "link": undefined }
      },
      {
        "quote": { "text": "A new scientific truth does not triumph by convincing its opponents and making them see the light, but rather because its opponents eventually die, and a new generation grows up that is familiar with it.", "link": undefined },
        "user": { "text": "Max Planck", "link": undefined }
      },
      {
        "quote": { "text": "It is not the strongest of the species that survives, nor the most intelligent that survives. It is the one that is most adaptable to change.", "link": undefined },
        "user": { "text": "Charles Darwin", "link": undefined }
      },
      {
        "quote": { "text": "School taught us that your skull is designed to protect your brain, you reach the streets and you realize that your brain is what you use to protect your skull.", "link": undefined },
        "user": { "text": "Bamodu", "link": undefined }
      },
      {
        "quote": { "text": "Don't waste your time chasing butterflies. Mend your garden, and the butterflies will come.", "link": undefined },
        "user": { "text": "Mário Quintana", "link": undefined }
      }
    ]

  let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  noStore()
  return randomQuote;
}