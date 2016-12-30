import React, { Component } from 'react';
import Poem from '../Poem/';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mode: null
        };

        // this.refreshPoem = this.refreshPoem.bind(this);
        this.handleVogonPoem = this.handleVogonPoem.bind(this);
        this.handleTolkienPoem = this.handleTolkienPoem.bind(this);
        this.handleGenericPoem = this.handleGenericPoem.bind(this);
        this.handleHaikuPoem = this.handleHaikuPoem.bind(this);
    }

    handleVogonPoem() {
        this.setState({
            mode: 'vogon'
        });
    }

    handleTolkienPoem() {
        this.setState({
            mode: 'tolkien'
        });
    }

    handleGenericPoem() {
        this.setState({
            mode: null
        });
    }

    handleHaikuPoem() {
        this.setState({
            mode: 'haiku'
        });
    }

    refreshPoem(event) {
        this.setState({
            mode: event.currentTarget.title
        });
    }

    render() {
        return (
            <div>
                <button
                    title="generic"
                    onClick={event => this.refreshPoem(event)}
                >
                    A simply bad poem
                </button>
                <button
                    title="tolkien"
                    onClick={event => this.refreshPoem(event)}
                >
                    A bad Tolkien poem
                </button>
                <button
                    title="vogon"
                    onClick={event => this.refreshPoem(event)}
                >
                    A bad Vogon poem
                </button>
                <button
                    title="haiku"
                    onClick={event => this.refreshPoem(event)}
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
