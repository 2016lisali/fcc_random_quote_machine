import { useState, useEffect } from 'react';
import './App.scss'
import Quote from "./components/Quote"
import TweetQuote from './components/Tweet';
import GetNewQuote from './components/GetNewQuote';

function App() {
  const [author, setAuthor] = useState("author")
  const [quoteText, setQuoteText] = useState("quote text ")
  const quoteURL = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
  let colors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857'
  ];
  const tweetURL = encodeURI(`https://twitter.com/intent/tweet?text=${quoteText}&hashtags=lisali`)

  const getQuote = () => {
    fetch(quoteURL)
      .then(result => result.json())
      .then(data => {
        let quotesList = [...data.quotes]
        let randomQuote = quotesList[Math.floor(Math.random() * 102)]
        setAuthor(randomQuote.author)
        setQuoteText(randomQuote.quote)
      })
    let randomColor = colors[Math.floor(Math.random() * colors.length)]
    document.getElementsByTagName("BODY")[0].style.backgroundColor = randomColor
    document.getElementById("quote-box").style.color = randomColor
    document.getElementById("new-quote").style.backgroundColor = randomColor
    document.getElementById("tweet-quote").style.color = randomColor

  }
  useEffect(() => {
    getQuote()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div id="quote-box" >
      <Quote quoteText={quoteText} author={author} />
      <TweetQuote tweetURL={tweetURL} />
      <GetNewQuote getQuote={getQuote} />
    </div>
  );
}

export default App;
