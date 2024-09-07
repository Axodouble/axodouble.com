"use client"
import styles from "./page.module.css";
import { useEffect, useState } from 'react';

export default function Home() {
  const [quote, setQuote] = useState(null);
  const [visibleSections, setVisibleSections] = useState([]);

  useEffect(() => {
    setQuote(getRandomQuote());
  }, []);

  const getNewQuote = () => {
    setQuote(getRandomQuote());
  };

  const handleSectionClick = (section) => {
    setVisibleSections(prevSections => {
      if (prevSections.includes(section)) {
        return prevSections.filter(sec => sec !== section);
      } else {
        return [...prevSections, section];
      }
    });
  };

  return (
    <main className={styles.main}>
      <h3 className={`${styles.h3} ${styles.clickable} ${styles.inversehighlight}`} onClick={() => handleSectionClick('aboutMe')}>
        about me
      </h3>
      {visibleSections.includes('aboutMe') && (
        <div className={styles.about}>
          <p>Hello! I am Axodouble.<br />
            I am a Netherlands-based Developer and specialize primarily in making reliable back-end infrastructure.
            As you might be able to tell I have less experience in front-end design as much as I hate to admit;
            however I do pride myself in my ability to create reliable infrastructure to support large operations.
            I host a significant amount of my services locally as a platform to develop on.
            This not only cuts down costs but also allows me to work with and learn other platforms of infrastructure.
            <br /><br />
            I have been working with computers for as long as I can remember as I was born around the advent of modern
            internet infrastructure. Over the years I have spent a significant amount of time in communities to learn-
            more about the general infrastructure of the modern web; this has given me the ability to work in different-
            positions with companies that require a more specialized and reliable approach to their internet infrastructure.
          </p>
        </div>
      )}<br />
      <h3 className={`${styles.h3} ${styles.clickable} ${styles.inversehighlight}`} onClick={() => handleSectionClick('contactMe')}>contact me</h3>
      {visibleSections.includes('contactMe') && (
        <div>
          Via <a className={styles.highlight} href="mailto:axodouble@axodouble.com">Mail</a> or via <a className={styles.highlight} href="https://discord.gg/Um7dr5vYK4">Discord</a>.
        </div>
      )}
      <br />
      {quote && (
        <>
          <h3 className={`${styles.h3} ${styles.clickable} ${styles.inversehighlight}`} onClick={() => getNewQuote()}>quote</h3>
          <p>
            "<i><a className={styles.inversehighlight} href={quote.quote.link || '#'}>{quote.quote.text}</a></i>"
            - <a className={styles.inverse} href={quote.user.link || '#'}>{quote.user.text}</a>
          </p>
        </>
      )}
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
        "quote": { "text" : "Sometimes everything I make just feels like an elaborate scheme to get the people close to me to tell me good job.", "link": undefined },
        "user": { "text": "Axodouble", "link": undefined }
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
      },
      {
        "quote": { "text": "I am da biggest bird.", "link": "https://youtu.be/Nr3355jvoXY&t=14" },
        "user": { "text": "Stan", "link": undefined }
      },
      {
        "quote": { "text": "There are no laws against the pokemon, batman.", "link": "https://www.youtube.com/watch?v=VZllAa1odpU" },
        "user": { "text": "Dylan", "link": undefined }
      },
      {
        "quote": { "text": "Do you think the children have 20 or fewer hitpoints?", "link": "https://www.youtube.com/shorts/NM08hquwic4" },
        "user": { "text": "Jasperagus", "link": undefined }
      }
    ]

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  return randomQuote;
}
