import React from 'react';

// This is my functional component. It will take the data from QuoteGenerator and display it
const QuoteDisplay = (props) => {
  return (
    <div>
      <p>"{props.quote.text}"</p>
      <p>- {props.quote.author}</p>
    </div>
  );
};

export default QuoteDisplay;