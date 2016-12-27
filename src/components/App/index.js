import React, { Component } from 'react';
import Poem from '../Poem';
import Vogon from '../PoemTemplates/Vogon';
import Tolkien from '../PoemTemplates/Tolkien';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            template: Vogon
        };

        this.handleRefreshButtonClick = this.handleRefreshButtonClick.bind(this);
    }

    handleRefreshButtonClick() {
        this.setState({
            template: Tolkien
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.handleRefreshButtonClick}>
                    Generate More Bad Poetry
                </button>
                <Poem template={this.state.template} />
            </div>
        );
    }
}

export default App;
