
// This component is built with:
// React: https://facebook.github.io/react/

import React from 'react';
import Sentence from '../Sentence';

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
            <Sentence name={'Tova'} />
        </div>
    );
  }
});

export default App;
