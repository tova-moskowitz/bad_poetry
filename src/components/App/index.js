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
        axios.get('/api/random-words/noun/?withIndefiniteArticle=true')
            .then(res => this.setState({ noun: res.data.noun }));
    }

    fetchWords() {
        axios.post('/api/random-words')
            .then(res => this.setState(res.data));
    }

    componentDidMount() {
        this.fetchNoun();
    }

    render() {
        return (
            <div>
                <button onClick={() => this.fetchNoun()}>
                    Refresh
                </button>
                <br /><br />
                This is {this.state.noun}.
            </div>
        );
    }
}

export default App;
