import React, { Component } from 'react';
import Poem from '../Poem/';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mode: null
        };
    }

    refreshPoem(mode) {
        this.setState({
            mode
        });
    }

    render() {
        return (
            <div>
                <button
                    onClick={() => this.refreshPoem('generic')}
                >
                    A simply bad poem
                </button>
                <button
                    onClick={() => this.refreshPoem('tolkien')}
                >
                    A bad Tolkien poem
                </button>
                <button
                    onClick={() => this.refreshPoem('vogon')}
                >
                    A bad Vogon poem
                </button>
                <button
                    onClick={() => this.refreshPoem('haiku')}
                >
                    A bad haiku
                </button>
                <br />
                <br />
                <Poem mode={this.state.mode} />
            </div>
        );
    }
}

export default App;
