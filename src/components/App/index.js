
// This component is built with:
// React: https://facebook.github.io/react/

import React from 'react';
import Tolkien from '../poetryTemplates/Tolkien';
import Vogon from '../poetryTemplates/Vogon';

const App = React.createClass({
  render: function () {
    return (
      <div>
        {/* <Tolkien /> */}
        <Vogon />
      </div>
    );
  }
});

export default App;
