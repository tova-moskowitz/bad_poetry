import React from 'react';
import Sentence from '../Sentence';

// Oh {this.getWord(this.adjectives)} {this.getWord(this.nounsSubject)}, <br />
// how {this.getWord(this.adjectives)} {this.getWord(this.pronouns)}, <br />
// when {this.getWord(this.possessives)} {this.getWord(this.nounsObject)}{' '}
// doth {this.getWord(this.verbs)}

const Vogon = React.createClass({
  template: <div>
    Ode to a Particle of Fluff {2 + 2}
  </div>,
  render: function () {
    return (
      <Sentence
        template={this.template}
        adjectives={['dotty']}
      />
    );
  }
});

export default Vogon;
