import React, { Component, PropTypes } from 'react';
import SelectionBlock from '../SelectionBlock';
import Tile from '../Tile';

import styles from './PoemBuilder.scss';

class PoemBuilder extends Component {
    render() {
        const { template } = this.props;
        const tiles = template.map((part, i) => (
            <Tile
                key={i}
                templateIndex={i}
                onRemove={this.props.handleRemoveFromTemplate}
            >
                {part}
            </Tile>
        ));

        return (
            <div className={styles.PoemBuilder}>
                <SelectionBlock onSelectPart={this.props.handleAddToTemplate} />
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
