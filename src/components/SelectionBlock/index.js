import React, { Component, PropTypes } from 'react';
import styles from './SelectionBlock.scss';
import { parts } from '../../wordBank';

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
        const partsOfSpeech = parts.map((part, i) => (
            <option value={part} key={i}>
                {part}
            </option>
        ));

        const staticText = (
            <option
                value="staticText"
                key={parts.length}
            >
                Static text...
            </option>
        );

        return (
            <div className={styles.SelectionBlock}>
                {this.props.label}
                <select onChange={this.handlePartOfSpeech}>
                    {partsOfSpeech}
                    {staticText}
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
    label: 'Choose a part of speech: '
};

export default SelectionBlock;
