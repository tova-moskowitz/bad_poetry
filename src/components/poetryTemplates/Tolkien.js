import React from 'react';
import Sentence from '../Sentence';

const Tolkien = React.createClass({
  template: 'May it be a Light for you in Dark Places',
  render: function () {
    return <Sentence template={this.template} />;
  }
});

export default Tolkien;
