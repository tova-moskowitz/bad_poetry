import React, { Component } from 'react';
import PoemBuilder from '../PoemBuilder';
import Poem from '../Poem';
// import Tile from '../Tile';

class App extends Component {
    constructor(props) {
        super(props);

        this.handleAddToTemplate = this.handleAddToTemplate.bind(this);
        this.handleRemoveFromTemplate = this.handleRemoveFromTemplate.bind(this);
        this.handleClearTemplate = this.handleClearTemplate.bind(this);
        this.toggleEditingMode = this.toggleEditingMode.bind(this);

        this.state = {
            template: ['noun', 'verb'],
            inEditingMode: true
        };
    }

    handleAddToTemplate(part) {
        this.setState({
            template: [...this.state.template, part]
        });
    }

    handleRemoveFromTemplate(index) {
        this.setState({
            template: this.state.template.filter((_, i) => i !== index)
        });
    }

    handleClearTemplate() {
        this.setState({
            template: []
        });
    }

    toggleEditingMode() {
        this.setState({
            inEditingMode: !this.state.inEditingMode
        });
    }

    renderPoemBuilder() {
        return (
            <PoemBuilder
                template={this.state.template}
                handleAddToTemplate={this.handleAddToTemplate}
                handleRemoveFromTemplate={this.handleRemoveFromTemplate}
            />
        );
    }

    renderPoem() {
        return (
            <Poem template={this.state.template} />
        );
    }

    render() {
        const { inEditingMode } = this.state;

        return (
            <div>
                <h1>Create a bad poem</h1>

                <button onClick={this.handleClearTemplate}>
                    Start over
                </button>

                <button onClick={this.toggleEditingMode}>
                    {inEditingMode
                        ? 'Run poem'
                        : 'Edit poem'
                    }
                </button>

                {inEditingMode
                    ? this.renderPoemBuilder()
                    : this.renderPoem()
                }
            </div>
        );
    }
}

export default App;
