import axios from 'axios';
import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            noun: null,
            adjective: null
        };

        this.fetchWords = this.fetchWords.bind(this);
    }

    fetchWords(desiredWordTypes) {
        axios.post('/api/random', {
            words: desiredWordTypes
        })
        .then((res) => {
            if (!res.data) {
                return;
            }

            this.setState(res.data);
        });
    }

    componentDidMount() {
        this.fetchWords(['noun', 'adjective']);
    }

    render() {
        return (
            <div>
                <button onClick={() => this.fetchWords(['noun', 'adjective'])}>
                    Refresh
                </button>
                <br /><br />
                This is a {this.state.adjective} {this.state.noun}.
            </div>
        );
    }
}

export default App;
