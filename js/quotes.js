const quotes = [
    {
        quote: "All our dreams can come true, if we have the courage to pursue them.",
        author: "Walt Disney",
    },
    {
        quote: "The secret of getting ahead is getting started.",
        author: "Mark Twain",
    },
    {
        quote: "The best time to plant a tree was 20 years ago. The second best time is now.",
        author: "Chinese Proverb",
    },
    {
        quote: "Only the paranoid survive.",
        author: "Andy Grove",
    },
    {
        quote: "It is hard to beat a person who never gives up.",
        author: "Babe Ruth",
    },
    {
        quote: "Write it. Shoot it. Publish it. Crochet it. Sauté it. Whatever. MAKE.",
        author: "Joss Whedon",
    },
    {
        quote: "Learn as if you will live forever, live like you will die tomorrow.",
        author: "Mahatma Gandhi",
    },
    {
        quote: "It is better to fail in originality than to succeed in imitation.",
        author: "Herman Melville",
    },
    {
        quote: "Success usually comes to those who are too busy looking for it.",
        author: "Henry David Thoreau",
    },
    {
        quote: "I never dreamed about success. I worked for it.",
        author: "Estée Lauder",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;