const TweetQuote = ({tweetQuote, tweetURL}) => {
  return (
    <>
      <a id="tweet-quote" target="_blank" href={tweetURL} >Tweet</a>
    </>
  );
}
 
export default TweetQuote;