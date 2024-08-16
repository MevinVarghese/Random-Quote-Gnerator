const quotes = [
  "The only way to do great work is to love what you do.",

  "In the end, we will remember not the words of our enemies, but the silence of our friends.",

  "The best time to plant a tree was 20 years ago. The second best time is now.",

  "Life is what happens when you're busy making other plans.",

  "Do not watch the clock. Do what it does. Keep going.",

  "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",

  "You miss 100% of the shots you don't take.",

  "It does not matter how slowly you go as long as you do not stop.",

  "The greatest glory in living lies not in never falling, but in rising every time we fall.",

  "Your time is limited, so don't waste it living someone else's life.",
];

const usedIndexes = new Set();

const quoteElement = document.getElementById("quote");

function generateQuote() {
  if (usedIndexes.size >= quotes.length) {
    usedIndexes.clear();
  }

  while (true) {
    const randomIdx = Math.floor(Math.random() * quotes.length);

    if (usedIndexes.has(randomIdx)) continue;

    const quote = quotes[randomIdx];
    quoteElement.innerHTML = quote;
    usedIndexes.add(randomIdx);
    break;
  }
}
