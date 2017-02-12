import React, { Component, PropTypes } from 'react';
import PartOfSpeechSelector from '../PartOfSpeechSelector';
import Tile from '../Tile';

import styles from './PoemBuilder.scss';

class PoemBuilder extends Component {
    render() {
        const {
            template,
            handleAddToTemplate,
            handleRemoveFromTemplate
        } = this.props;

        return (
            <div className={styles.PoemBuilder}>
                Choose a part of speech: <PartOfSpeechSelector onChange={handleAddToTemplate} />
                Add static text: <form
                    className={styles.staticTextForm}
                    onSubmit={this.handleAddToTemplate}
                >
                    <input
                        type="text"
                        ref={(input) => {
                            this.input = input;
                        }}
                    />
                    <button>save</button>
                </form>

                {template.map((part, i) => (
                    <Tile
                        key={i}
                        templatePosition={i}
                        onRemove={handleRemoveFromTemplate}
                    >
                        {part}
                    </Tile>
                ))}
            </div>
        );
    }
}

PoemBuilder.propTypes = {
    template: PropTypes.arrayOf(PropTypes.string).isRequired,
    handleAddToTemplate: PropTypes.func.isRequired,
    handleRemoveFromTemplate: PropTypes.func.isRequired
};

export default PoemBuilder;
