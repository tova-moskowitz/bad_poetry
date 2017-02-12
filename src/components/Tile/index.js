import React, { Component, PropTypes } from 'react';
import styles from './Tile.scss';

class Tile extends Component {
    render() {
        const { children, onRemove, templateIndex } = this.props;

        return (
            <div className={styles.Tile}>
                {children}
                <button onClick={() => onRemove(templateIndex)}>x</button>
            </div>
        );
    }
}

Tile.propTypes = {
    children: PropTypes.string.isRequired,
    onRemove: PropTypes.func.isRequired,
    templateIndex: PropTypes.number.isRequired
};

export default Tile;
