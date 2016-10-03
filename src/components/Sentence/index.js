
// This component is built with:
// React: https://facebook.github.io/react/

import React from 'react';

const Sentence = React.createClass({
  adjectives: [
    'flibberglitted',
    'salmony',
    'beknighted',
    'scintillating'
  ],
  getAdjective: function(){
    const index = Math.floor(Math.random() * this.adjectives.length);
    return this.adjectives[index];
  },
  render: function() {
    // return <div>Hellooooo {this.props.name}</div>;
    return <div>Oh {this.getAdjective()} fliskerbubble, <br /> how divine art thou</div>;
  },
});


export default Sentence;
