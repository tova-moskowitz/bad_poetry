
// This component is built with:
// React: https://facebook.github.io/react/

import React from 'react';
import Sentence from '../Sentence';

const App = React.createClass({
    getInitialState: function () {
        return {
            sentence: <Sentence />
        };
    },
    handleClick: function () {
        this.setState({
            sentence: <Sentence />
        });
    },
    render: function () {
        return (
            <div>
                {this.state.sentence}
                <button onClick={this.handleClick}>
                    Generate More Bad Poetry
                </button>
            </div>
        );
    }
});

export default App;
