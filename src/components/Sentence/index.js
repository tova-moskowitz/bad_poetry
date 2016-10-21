
// This component is built with:
// React: https://facebook.github.io/react/

import React from 'react';

const Sentence = React.createClass({
  adjectives: [
    'flibberglitted',
    'salmony',
    'beknighted',
    'scintillating',
    'flabbergasted',
    'distracted',
    'shattered',
    'foamy',
    'primitive',
    'blathery',
    'crumpled'
  ],
  nouns: [
    'handkerchief',
    'blognoggin',
    'umbrella',
    'big foot',
    'blisterbubble'
  ],
  verbs: [
    'skitter',
    'froth',
    'zoom forward',
    'stew',
    'operate',
    'stomp'
  ],
  adverbs: [
    'speedily',
    'clammily',
    'frighteningly',
    'knowingly',
    'blisteringly'
  ],
  pronouns: [
    'am I',
    'art thou',
    'is thee',
    'art we',
    'ist he',
    'ist she',
    'ist it'
  ],
  possessives: [
    'mine',
    'thy',
    'thine',
    'his',
    'her'
  ],
  getWord: function(posp){
    const index = Math.floor(Math.random() * posp.length);
    return posp[index];
  },
  render: function() {
    return <div>Oh {this.getWord(this.adjectives)} {this.getWord(this.nouns)}, <br /> how {this.getWord(this.adjectives)} {this.getWord(this.pronouns)}, <br/> when {this.getWord(this.possessives)} {this.getWord(this.nouns)} doth {this.getWord(this.adverbs)} {this.getWord(this.verbs)}</div>;
  },
});

export default Sentence;
