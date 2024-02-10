import React from 'react';

import QuoteDisplay from './QuoteDisplay';

// This is my class component. It will hold the state of the current quote and pick a new one when the button is clicked
class QuoteGenerator extends React.Component {
    // State to hold the current quote. Initially it wpn't have a quote, so it will display the message below
    state = {
        quote: {
            text: 'Did you not read the instructions? Click the button to generate a random quote!',
            author: 'Me (duh!)',
        },
    };

  // Array of quotes, I found them in a random github link, idek why someone has a repo for this
    quotes = [
        { text: 'The only way to do great work is to love what you do.', author: 'Steve Jobs' },
        { text: 'The purpose of our lives is to be happy.', author: 'Dalai Lama' },
        { text: "It is not that I'm so smart. But I stay with the questions much longer.", author: "Albert Einstein" },
        { text: "Build your own dreams, or someone else will hire you to build theirs.", author: "Farrah Gray" },
        { text: "Comfort is the enemy of achievement", author: "Farrah Gray" },
        { text: "You know, you don't have to have money to be a successful businessperson.", author: "Farrah Gray" },
        { text: "I can dream alone and strive alone, but true success always requires the help and support of others.", author: "Farrah Gray" },
        { text: "Success isn’t something that happens overnight: it’s a process.", author: "Farrah Gray" },
        { text: "The more we give, the more we receive. It's important to give back, because the seeds you plant today, you will harvest tomorrow.", author: "Farrah Gray" },
        { text: "Either you run the day, or the day runs you.", author: "Jim Rohn" },
        { text: "Start from wherever you are and with whatever you’ve got.", author: "Jim Rohn" },
        { text: "Without constant activity, the threats of life will soon overwhelm the values", author: "Jim Rohn" },
        { text: "If you don’t like how things are, change it! You’re not a tree.", author: "Jim Rohn" },
        { text: "Success is neither magical nor mysterious. Success is the natural consequence of consistently applying basic fundamentals.", author: "Jim Rohn" },
        { text: "How long should you try? Until.", author: "Jim Rohn" },
        { text: "Focus on making yourself better, not on thinking that you are better.", author: "Bohdi Sanders" },
        { text: "A true friend is someone you can count on no matter what.", author: "Bohdi Sanders" },
        { text: "Face your fears and you will be able to conquer them.", author: "Bohdi Sanders" },
        { text: "If you want to know what people believe, don’t read what they write, don’t ask what they believe, just observe what they do.", author: "Bohdi Sanders" },
        { text: "I used to think I was indecisive, but now I am not quite sure.", author: "Tommy Cooper" },
        { text: "Police arrested two kids yesterday, one was drinking battery acid, the other was eating fireworks. They charged one and let the other one off.", author: "Tommy Cooper" },
        { text: "You know, somebody actually complimented me on my driving today. They left a little note on the windscreen, it said 'Parking Fine.'", author: "Tommy Cooper" },
        { text: "A lie gets halfway around the world before the truth has a chance to get its pants on.", author: "Winston Churchill" },
        { text: "Knowledge is like underwear. It is useful to have it, but not necessary to show it off.", author: "Bill Murray" },
        { text: "We are all here on earth to help others; what on earth the others are here for I don't know.", author: "Bill Murray" },
        { text: "Happiness is having a large, loving, caring, close-knit family in another city.", author: "George Burns" },
        { text: "A professor is someone who talks in someone else's sleep.", author: "W. H. Auden" },
        { text: "Everything is changing. People are taking the comedians seriously and the politicians as a joke.", author: "Will Rogers" },
        { text: "That’s why they call it the American Dream, because you have to be asleep to believe it.", author: "George Carlin" },
        { text: "If you’re too open-minded; your brains may fall out.", author: "Lawrence Ferlinghetti" },
        { text: "If you think nobody cares about you, try missing a couple of payments.", author: "Steven Wright" },
        { text: "There's a fine line between fishing and just standing on the shore like an idiot.", author: "Steven Wright" },
        { text: "If at first you don't succeed then skydiving definitely isn't for you.", author: "Steven Wright" },
        { text: "A lot of people are afraid of heights. Not me, I'm afraid of widths.", author: "Steven Wright" },
        { text: "What's another word for Thesaurus?", author: "Steven Wright" },
        { text: "You can't have everything. Where would you put it?", author: "Steven Wright" },
        { text: "Don’t be so humble – you are not that great.", author: "Golda Meir" },
        { text: "Whether women are better than men I cannot say - but I can say they are certainly no worse.", author: "Golda Meir" },
        { text: "The best way to teach your kids about taxes is by eating 30 percent of their ice cream.", author: "Bill Murray" },
        { text: "You can't soar with the eagles as long as you hang out with the turkeys.", author: "Joel Osteen" }
    ];

    // Method to pick a new random quote from the array
    generateQuote = () => {
        const randomIndex = Math.floor(Math.random() * this.quotes.length);
        this.setState({ quote: this.quotes[randomIndex] });
    };

    render() {
        return (
        <div>
            <QuoteDisplay quote={this.state.quote} />
            <button onClick={this.generateQuote}>New Quote</button>
        </div>
        );
    }
}

export default QuoteGenerator;