import React, { Component } from 'react';
import Poem from '../Poem';
import Vogon from '../Poets/Vogon/';
import Tolkien from '../Poets/Tolkien/';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            template: Tolkien
        };

        this.handleRefreshVogonPoem = this.handleRefreshVogonPoem.bind(this);
        this.handleRefreshTolkienPoem = this.handleRefreshTolkienPoem.bind(this);
    }

    handleRefreshVogonPoem() {
        this.setState({
            template: Vogon
        });
    }

    handleRefreshTolkienPoem() {
        this.setState({
            template: Tolkien
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.handleRefreshVogonPoem}>
                    See a Vogon poem
                </button>
                <button onClick={this.handleRefreshTolkienPoem}>
                    See a Tolkien poem
                </button>
                <Poem template={this.state.template} />
            </div>
        );
    }
}

export default App;
