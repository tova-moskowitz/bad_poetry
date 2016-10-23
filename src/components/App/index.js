
// This component is built with:
// React: https://facebook.github.io/react/

import React from 'react';
import Sentence from '../Sentence';
import RefreshPoemButton from '../RefreshPoemButton';

//example of ES6 syntax, and a stateless component
// function App() {
//   return (
//     <div>
//       <HelloWorld />
//     </div>
//   );
// }

var App = React.createClass({
  refreshPoem: function() {
      console.log("CLICKED");
  },
  render: function() {
    return (
        <div>
            <Sentence />
            <RefreshPoemButton onclick={this.refreshPoem.bind}/>
        </div>
    );
  }
});

export default App;
