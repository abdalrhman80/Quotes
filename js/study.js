// الكود اللي فكرت فيه الاول
// var quote = document.getElementById("quote");

// var quoteArr = [
//   `”You miss 100% of the shots you don't take.”
// <br>
// --Wayne Gretzy`,
//   `“A day without sunshine is like, you know, night.”
// <br>
// -- Steve Martin`,
//   `“That which does not kill us makes us stronger.”
// <br>
// -- Friedrich Nietzsche`,
//   `“It is never too late to be what you might have been.”
// <br>
// -- George Eliot`,
//   `“For every minute you are angry you lose sixty seconds of happiness.”
// <br>
// -- Ralph Waldo Emerson`,
//   `“If you judge people, you have no time to love them”
// <br>
// -- Mother Teresa`,
//   `“You only live once, but if you do it right, once is enough.”
// <br>
// -- Mae West`,
//   `“Be the change that you wish to see in the world.”
// <br>
// -- Mahatma Gandhi`,
//   `“If you tell the truth, you don't have to remember anything.”
// <br>
// -- Mark Twain`,
//   `“Always forgive your enemies; nothing annoys them so much.”
// <br>
// -- Oscar Wilde`,
// ];

// function getQuotes() {
//   var randomIndex = Math.trunc(Math.random() * quoteArr.length);

//   // for (i = 0; i < quoteArr.length; i++) {
//   //   if (quoteArr[i] == quoteArr[randomIndex]) {
//   //     randomIndex++;
//   //   }
//   // }
//   console.log(randomIndex);
//   quote.innerHTML = quoteArr[randomIndex];
// }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var quoteArr = [
  {
    quote: `”You miss 100% of the shots you don't take.”`,
    author: `- Wayne Gretzy`,
  },
  {
    quote: `“A day without sunshine is like, you know, night.”`,
    author: `- Steve Martin`,
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
    quote: `“For every minute you are angry you lose sixty seconds of happiness.”`,
    author: `--Ralph Waldo Emerson`,
  },
  {
    quote: `“If you judge people, you have no time to love them.”`,
    author: `- Mother Teresa`,
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

// ....جديد وبعدين يقارنه , وهكذ  randomIndex ويعمل  loop وكدا القيمة هتتحفظ , ولو بيساوا بعض هيخش جوا ال  lastRandomIndex لل Update مش بيساوا بعض فا هيعمل  Variables الاول وبعدين يعمل المقارنه لو ال randomIndex هيطلع  Call عشان لما اعمل  Global عرفته
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

// getQuotes();
// تخلص Function عشان اتأكد ان القيمة اتحفظت بعد ما ال
// console.log(lastRandomIndex);
