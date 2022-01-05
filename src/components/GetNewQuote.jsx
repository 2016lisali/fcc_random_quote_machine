
const GetNewQuote = (props) => {
  return ( 
    <>
      <button id="new-quote" onClick= {props.getQuote} >New Quote</button>
    </>
  );
}
 
export default GetNewQuote;