import React, { Component } from 'react';
import Poem from '../Poem/';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mode: null
        };

        this.handleVogonPoem = this.handleVogonPoem.bind(this);
        this.handleTolkienPoem = this.handleTolkienPoem.bind(this);
        this.handleDefaultPoem = this.handleDefaultPoem.bind(this);
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

    handleDefaultPoem() {
        this.setState({
            mode: null
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.handleDefaultPoem}>
                    More bad poetry
                </button>
                <button onClick={this.handleTolkienPoem}>
                    See a Tolkien poem
                </button>
                <button onClick={this.handleVogonPoem}>
                    See a Vogon poem
                </button>
                <br />
                <br />
                <Poem mode={this.state.mode} />
            </div>
        );
    }
}

export default App;
