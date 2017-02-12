import React, { Component, PropTypes } from 'react';
import SelectionBlock from '../SelectionBlock';
import Tile from '../Tile';

import styles from './PoemBuilder.scss';

class PoemBuilder extends Component {
    render() {
        const {
            template,
            handleAddToTemplate,
            handleRemoveFromTemplate
        } = this.props;

        const tiles = template.map((part, i) => (
            <Tile
                key={i}
                templatePosition={i}
                onRemove={handleRemoveFromTemplate}
            >
                {part}
            </Tile>
        ));

        return (
            <div className={styles.PoemBuilder}>
                <SelectionBlock onSelectPart={handleAddToTemplate} />
                {tiles}
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
