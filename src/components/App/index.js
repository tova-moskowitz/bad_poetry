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
        this.turnOnEditMode = this.turnOnEditMode.bind(this);
        this.turnOffEditMode = this.turnOffEditMode.bind(this);

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
            template: [],
            inEditingMode: true
        });
    }

    turnOnEditMode() {
        this.setState({
            inEditingMode: true
        });
    }

    turnOffEditMode() {
        this.setState({
            inEditingMode: false
        });
    }

    renderPoemBuilder() {
        const { template } = this.state;

        return (
            <div>
                {template.length > 0 && (
                    <button onClick={this.turnOffEditMode}>View Poem</button>)
                }

                <hr />
                <PoemBuilder
                    template={template}
                    handleAddToTemplate={this.handleAddToTemplate}
                    handleRemoveFromTemplate={this.handleRemoveFromTemplate}
                />
            </div>
        );
    }

    renderPoem() {
        return (
            <div>
                <button onClick={this.turnOnEditMode}>Back to editing</button>
                <button onClick={this.turnOffEditMode}>Refresh</button>
                <hr />

                <Poem template={this.state.template} />
            </div>
        );
    }

    render() {
        const { inEditingMode } = this.state;

        return (
            <div>
                <h1>Create a bad poem</h1>

                {inEditingMode
                    ? this.renderPoemBuilder()
                    : this.renderPoem()
                }

                <hr />

                <button onClick={this.handleClearTemplate}>
                    Start over
                </button>
            </div>
        );
    }
}

export default App;
