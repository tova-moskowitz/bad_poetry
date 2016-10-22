
// This component is built with:
// React: https://facebook.github.io/react/

import React from 'react';

const Sentence = React.createClass({
  adjectives: [
    'leathery',
    'salmony',
    'beknighted',
    'scintillating',
    'flabbergasted',
    'distracted',
    'shattered',
    'foamy',
    'primitive',
    'blathery',
    'crumpled',
    'tiny'
  ],
  nounsSubject: [
    'handkerchief',
    'elephant tusk',
    'umbrella',
    'big foot',
  ],
  nounsObject: [
    'fancily decorated toothpick',
    'bunch of blue balloons',
    'washing machine lint filter with towel fluff in it',
    'banana with a brown spot'
  ],
  verbs: [
    'skitter',
    'froth',
    'zoom forward',
    'stew',
    'waggle its little finger',
    'stomp',
    'chew a purple gumball',
    'fray'
  ],
  // adverbs: [
  //   'speedily',
  //   'clammily',
  //   'frighteningly',
  //   'knowingly',
  //   'blisteringly',
  //   'alarmingly'
  // ],
  pronouns: [
    'am I',
    'art thou',
    'is thee',
    'are we',
    'is he',
    'is she',
    'is it'
  ],
  possessives: [
    'my',
    'your',
    'their',
    'his',
    'her',
    'our'
  ],
  getWord: function(wordsArray){
    const index = Math.floor(Math.random() * wordsArray.length);
    return wordsArray[index];
  },
  render: function() {
    return <div>Oh {this.getWord(this.adjectives)} {this.getWord(this.nounsSubject)}, <br /> how {this.getWord(this.adjectives)} {this.getWord(this.pronouns)}, <br/> when {this.getWord(this.possessives)} {this.getWord(this.nounsObject)} doth  {this.getWord(this.verbs)}</div>;
  },
});

export default Sentence;
