import { FaTwitterSquare } from "react-icons/fa";
const TweetQuote = ({tweetQuote, tweetURL}) => {
  return (
    <>
      <a id="tweet-quote" target="_blank" rel="noreferrer" href={tweetURL} ><FaTwitterSquare /></a>
    </>
  );
}
 
export default TweetQuote;