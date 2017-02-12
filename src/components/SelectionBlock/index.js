import React, { Component, PropTypes } from 'react';
import styles from './SelectionBlock.scss';

const parts = [
    'adjective',
    'adverb',
    'conjunction',
    'interjection',
    'noun',
    'preposition',
    'pronoun',
    'verb'
];

class SelectionBlock extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showStaticTextField: false
        };

        this.handlePartOfSpeech = this.handlePartOfSpeech.bind(this);
        this.handleStaticText = this.handleStaticText.bind(this);
    }

    handlePartOfSpeech(e) {
        const { onSelectPart } = this.props;
        const value = e.currentTarget.value;

        this.setState({
            showStaticTextField: value === 'staticText'
        });

        if (value === 'staticText') {
            return;
        }

        onSelectPart(value);
    }

    handleStaticText(e) {
        const { onSelectPart } = this.props;
        const value = this.input.value;

        e.preventDefault();

        this.setState({
            showStaticTextField: false
        });

        onSelectPart(value);
    }

    render() {
        const partOfSpeechOptions = parts.map((part, i) => (
            <option value={part} key={i}>
                {part}
            </option>
        ));

        return (
            <div className={styles.SelectionBlock}>
                <select onChange={this.handlePartOfSpeech}>
                    <option defaultValue>{this.props.label}</option>
                    {partOfSpeechOptions}
                    <option value="staticText" key={parts.length}>Static text...</option>
                </select>

                {this.state.showStaticTextField && (
                    <form
                        className={styles.staticTextForm}
                        onSubmit={this.handleStaticText}
                    >
                        <input
                            type="text"
                            ref={(input) => {
                                this.input = input;
                            }}
                        />
                        <button>save</button>
                    </form>
                )}
            </div>
        );
    }
}

SelectionBlock.propTypes = {
    label: PropTypes.string.isRequired,
    onSelectPart: PropTypes.func.isRequired
};

SelectionBlock.defaultProps = {
    label: 'Choose'
};

export default SelectionBlock;
