
const Quote = ({ quoteText, author }) => {

  return (
    <>
      <h2 id="text">"{quoteText}"</h2>
      <p id="author"> - {author}</p>
    </>
  )
}
export default Quote;