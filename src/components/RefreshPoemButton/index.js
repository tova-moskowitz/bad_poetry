import React from 'react';
import Sentence from '../Sentence';

var RefreshPoemButton = React.createClass({
  renderRefreshButton: function(){
    return <button>Generate More Bad Poetry</button>;
  },
  render: function(){
    return <div>{this.renderRefreshButton()}</div>;
  }
});


export default RefreshPoemButton;
