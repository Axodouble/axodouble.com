const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send(`<html>

    <head>
        <link rel="stylesheet" href="/style.php">
        <meta charset="UTF-8">
        <title>axodouble.com</title>
    </head>

    <style>
    @import url("https://fonts.googleapis.com/css?family=Roboto+Mono");
@import url("https://fonts.googleapis.com/css?family=Roboto");
@import url("https://fonts.googleapis.com/css?family=Anton");

body {
  padding: 20px;
  background-color: #36393f;
  color: #dfdfdf;
  font-family: "Roboto Mono";
  font-size: 14px;
  line-height: 22px;
  margin: 0 auto;
  max-width: 960px;
}

pre {
  color: #6079aa;
}

a {
  color: #6079aa;
  text-decoration: none;
}

a:hover {
  color: #51afef;
}

b {
  color: #dfdfdf;
}
b:hover {
  color: #51afef;
}

c {
  color: #dfdfdf;
}
c:hover {
  color: #51afef;
}

img {
  border-radius: 13px;
}

tiny {
  font-size: 9px;
}
h1 {
  font-size: 20px;
  color: #dfdfdf;
  margin-bottom: 0px;
}

h2,
h3,
h4,
h5,
h6 {
  font-size: 16px;
  color: #6079aa;
  margin-bottom: 0px;
}

li {
  color: #6079aa;
}

p {
  padding: 0px;
  margin: 0px;
}

div.parent {
  text-align: center;
}

ul,
ol {
  text-align: left;
}

blockquote {
  display: inline-block;
  text-align: left;
}

    </style>

    <body>
        <div class="parent">
            <a href="https://axodouble.com/">
                <h1>AXODOUBLE.COM</h1>
            </a>
            Welcome to axodouble.com, <a href='https://xdbl.dev/?l=0eSF3'>join</a> my <a href='https://xdbl.dev/?l=0eSF3'>discord</a>!<br>
            
            <h3>Random Quote.</h3>
            ${loadRandomQuote()}
        </div>
    </body>

    </html>`);
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});

function loadRandomQuote() {
    let quotes = [
        "\"<a href=\"https://www.youtube.com/watch?v=W3grGj4oUR8\"><i>I'm a silly boy kisser.</i></a>\"<a href=\"https://www.youtube.com/watch?v=W3grGj4oUR8\"><c> - Smeko.<c></a><br>",
        "\"<a><i>If you were a worm I would shake you every day until you die of a severe brain concussion.</i></a>\" - Jazzodouble.<br>",
        "\"<a><i>I don't like you I tolerate you.</a></i>\" - Hoodie.<br>",
        "\"<a><i>There is a price to pay for speaking the truth. There is a bigger price for living a lie.</a></i>\" - Miku.<br>",
        "\"<a><i>It ain't gay if it's a femboy.</i></a>\" - KaNin. (<a href=\"https://xdbl.dev/i?i=rkmLY\">Essay</a>)<br>",
        "\"<a><i>Men don't even know what they're doing half the time- like-</i></a>\" - Jazzodouble.<br>",
        "\"<a><i>It's getting pretty caucasian in here.</i></a>\" - <a href=\"https://metsh.tech/\"><c>Metshtival.<tiny> click me~</tiny><c></a><br>",
        "\"<a href=\"https://www.youtube.com/watch?v=L3wKzyIN1yk\"><i>I remember that one time that Sly downloaded the Physics Mod, killed a cow and then (messed around with) it.</i></a>\" - <a href=\"https://www.youtube.com/watch?v=L3wKzyIN1yk\"><c>Ekstacy.<c></a><br>",
        "\"<a><i>Money can't buy back your youth when you're old, a friend when you're lonely, or peace to your soul.</i></a>\" - Johnny Cash.<br>",
        "\"<a><i>Can't shake the devil's hand and say you're only kidding.</i></a>\" - on <a href=\"https://www.youtube.com/watch?v=Ow-nuHCTA5E\">Your Racist Friend</a>, by They Might Be Giants.<br>",
        "\"<a><i>A weapon does not decide whether or not to kill. A weapon is a manifestation of a decision that has already been made.</i></a>\" - On <a href=\"https://www.amazon.com/Cellist-Sarajevo-Steven-Galloway/dp/1594483655\">The Cellist of Sarajevo</a>, by Steven Galloway.<br>",
        "\"<a><i>You can't call yourself peaceful if you're not capable of violence. If you're not capable of violence, you're not peaceful; you're harmless.</i></a>\" - Someone.<br>",
        "\"<a><i>I do believe that, where there is only a choice between cowardice and violence, I would advise violence.</i></a>\" - Mahatma Gandhi.<br>",
        "\"<a><i>Then there was the war, and I married it because there was nothing else when I reached the age of falling in love.</i></a>\" - On <a href=\"https://www.amazon.com/Forgotten-Soldier-Guy-Sajer/dp/1574882864\">The Forgotten Soldier</a>, by Guy Sajer.<br>",
        "\"<a><i>I fear all we have done is to awaken a sleeping giant and fill him with a terrible resolve.</i></a>\" - Isoroku Yamamoto.<br>",
        "\"<a><i>Your mind will always shutdown before your body, only way to test your full potential is to get pushed to your limits.</a></i>\" - Galah.<br>",
        "\"<a><i>Despite all my beans, I'm still just a rat in some jeans.</i></a>\" - Jazzodouble.<br>",
        "\"<a><i>It is what it is.</i></a>\" - ZoliWorks.<br><br><br><br>Check out <a href=\"https://bisecthosting.com/ZWS\">BisectHosting</a> if you're looking for an affordable server! Use the code ZWS at checkout for a 25% discount! ",
        "\"<a><i>I hate the word homophobia. It's not a phobia. You're not scared. You're an asshole.</i></a>\" - Morgan Freeman.<br>",
        "\"<a><i>If you're not in the state of post-nut clarity, you're in state of pre-nut delusion.</i></a>\" - Taki.<br>",
        "\"<a href=\"https://en.wikipedia.org/wiki/Ignaz_Semmelweis\"><i>My doctrines exist to rid maternity hospitals of their horror, to preserve the wife for her husband and the mother for her child.</i></a>\" - <a href=\"https://en.wikipedia.org/wiki/Ignaz_Semmelweis\"><c>Ignaz Semmelweis.</c></a>",
        "\"<a href=\"https://en.wikipedia.org/wiki/Ignaz_Semmelweis\"><i>My doctrines exist to rid maternity hospitals of their horror, to preserve the wife for her husband and the mother for her child.</i></a>\" - <a href=\"https://en.wikipedia.org/wiki/Ignaz_Semmelweis\"><c>Ignaz Semmelweis.</c></a>",
        "\"<a href=\"https://en.wikipedia.org/wiki/Ignaz_Semmelweis\"><i>My doctrines exist to rid maternity hospitals of their horror, to preserve the wife for her husband and the mother for her child.</i></a>\" - <a href=\"https://en.wikipedia.org/wiki/Ignaz_Semmelweis\"><c>Ignaz Semmelweis.</c></a>",
        "\"<a href=\"https://en.wikipedia.org/wiki/Ignaz_Semmelweis\"><i>My doctrines exist to rid maternity hospitals of their horror, to preserve the wife for her husband and the mother for her child.</i></a>\" - <a href=\"https://en.wikipedia.org/wiki/Ignaz_Semmelweis\"><c>Ignaz Semmelweis.</c></a>",
        "\"<a><i>There is no real ending. It's just the place where you stop the story.</i></a> - Frank Herbert.<br>\"",
        "\"<a><i>A new scientific truth does not triumph by convincing its opponents and making them see the light, but rather because its opponents eventually die, and a new generation grows up that is familiar with it.</i></a>\" - Max Planck.<br>",
        "\"<a><i>It is not the strongest of the species that survives, nor the most intelligent that survives. It is the one that is most adaptable to change.</i></a>\" - Charles Darwin.<br>",
        "\"<a><i>School taught us that your skull is designed to protect your brain, you reach the streets and you realize that your brain is what you use to protect your skull.</i></a>\" - Bamodu.<br>",
        "\"<a><i>Don't waste your time chasing butterflies. Mend your garden, and the butterflies will come.</i></a>\" - Mário Quintana.<br>",
    ]
    return quotes[Math.floor(Math.random() * quotes.length)];
}