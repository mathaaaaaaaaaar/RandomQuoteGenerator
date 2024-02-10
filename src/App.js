import './App.css';

import React from 'react';

import QuoteGenerator from './components/QuoteGenerator';

class App extends React.Component {
  render() {
    return (
      // I hope this JSX is pretty enough (It's very sensitive, please be nice, and don't hurt it's feelings)
      <div className="App">
        <h1>Random Quote Generator</h1>
        <h4>Sometimes you just need a random website to motivate you. If this is your ONLY source of motivation...please seek professional help. This is not a substitute for therapy</h4>
        <h2>Click the button to generate a random quote!</h2>
        <div id="quote-box">
          <QuoteGenerator />
        </div>
      </div>
    );
  }
}

export default App;