import React from 'react';
import wordBank from '../../lib/wordBank';

const Sentence = React.createClass({
    getWord: function (wordsArray) {
        const index = Math.floor(Math.random() * wordsArray.length);
        return wordsArray[index];
    },
    render: function () {
        const {
            adjectives,
            adverbs,
            nounsObject,
            nounsSubject,
            possessives,
            pronouns,
            verbs
        } = wordBank;

        return (
            <div>
                Oh {this.getWord(adjectives)} {this.getWord(nounsSubject)},
                <br />
                how {this.getWord(adjectives)} {this.getWord(pronouns)},
                <br />
                when {this.getWord(possessives)} {this.getWord(nounsObject)} doth {this.getWord(verbs)}
            </div>
        );
    },
});

export default Sentence;
