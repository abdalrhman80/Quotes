var quoteArr = [
  {
    quote: `”You miss 100% of the shots you don't take.”`,
    author: `- Wayne Gretzy`,
  },
  {
    quote: `“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”`,
    author: `- J.K. Rowling`,
  },
  {
    quote: `“That which does not kill us makes us stronger.”`,
    author: `- Friedrich Nietzsche`,
  },
  {
    quote: `“It is never too late to be what you might have been.”`,
    author: `- George Eliot`,
  },
  {
    quote: `“Don’t walk in front of me… I may not follow,
    Don’t walk behind me… I may not lead,
    Walk beside me… just be my friend”`,
    author: `- Albert Camus`,
  },
  {
    quote: `“Sometimes the questions are complicated and the answers are simple.”`,
    author: `- Dr. Seuss`,
  },
  {
    quote: `“You only live once, but if you do it right, once is enough.”`,
    author: `- Mae West`,
  },
  {
    quote: `“Be the change that you wish to see in the world.”`,
    author: `- Mahatma Gandhi`,
  },
  {
    quote: `“If you tell the truth, you don't have to remember anything.”`,
    author: `- Mark Twain`,
  },
  {
    quote: `“Always forgive your enemies; nothing annoys them so much.”`,
    author: `- Oscar Wilde`,
  },
];

var lastRandomIndex = -1;

function getQuotes() {
  var randomIndex;
  do {
    randomIndex = Math.trunc(Math.random() * quoteArr.length);
  } while (randomIndex == lastRandomIndex);

  lastRandomIndex = randomIndex;

  console.log(lastRandomIndex);
  document.getElementById("quote").innerHTML = quoteArr[lastRandomIndex].quote;
  document.getElementById("author").innerHTML =
    quoteArr[lastRandomIndex].author;
}
