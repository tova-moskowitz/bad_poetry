
// This component is built with:
// React: https://facebook.github.io/react/

import React from 'react';
import wordBank from '../../lib/wordBank/generic';

console.log(wordBank.verb);

const Sentence = React.createClass({
  propTypes: {
    template: React.PropTypes.string.isRequired,
    adjectives: React.PropTypes.arrayOf(React.PropTypes.string.isRequired),
    verbs: React.PropTypes.arrayOf(React.PropTypes.string.isRequired)
  },
  getDefaultProps() {
    return {
      adjectives: wordBank.adjectives,
      adverbs: wordBank.adverbs,
      nounsObject: wordBank.nounsObject,
      nounsSubject: wordBank.nounsSubject,
      possessives: wordBank.possessives,
      pronouns: wordBank.pronouns,
      verbs: wordBank.verbs
    };
  },
  getWord: function (wordsArray) {
    const index = Math.floor(Math.random() * wordsArray.length);
    return wordsArray[index];
  },
  render: function () {
    return (
      <div>
        {this.props.template}
        <div>These are the adjectives: {this.props.adjectives}</div>
        <div>These are the verbs: {this.props.verbs}</div>
      </div>
    );
  },
});

export default Sentence;

// nounsSubject: React.PropTypes.array,
// nounsObject: React.PropTypes.array,
// pronouns: React.PropTypes.array,
// possessives: React.PropTypes.array
