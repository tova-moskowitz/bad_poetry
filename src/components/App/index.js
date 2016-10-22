
// This component is built with:
// React: https://facebook.github.io/react/

import React from 'react';
import Sentence from '../Sentence';

//ecma6 syntax, and a stateless component
// function App() {
//   return (
//     <div>
//       <HelloWorld />
//     </div>
//   );
// }

var App = React.createClass({
  render: function(){
    return (
        <div>
            <Sentence />
        </div>
    );
  }
});

export default App;
