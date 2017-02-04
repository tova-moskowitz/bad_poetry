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
        this.fetchNoun = this.fetchNoun.bind(this);
    }

    fetchNoun() {
        axios.get('/api/random-word/noun')
            .then((res) => {
                this.setState({
                    noun: res.data.noun
                });
            });
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
        this.fetchNoun();
        // this.fetchWords(['noun', 'adjective']);
    }

    render() {
        return (
            <div>
                <button onClick={() => this.fetchNoun()}>
                    Refresh
                </button>
                <br /><br />
                This is a {this.state.noun}.
            </div>
        );
    }
}

export default App;
