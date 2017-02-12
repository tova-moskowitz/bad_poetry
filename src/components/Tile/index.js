import React, { Component, PropTypes } from 'react';
import styles from './Tile.scss';

class Tile extends Component {
    render() {
        const { children, onRemove, templatePosition } = this.props;

        return (
            <div className={styles.Tile}>
                {children}
                <button onClick={() => onRemove(templatePosition)}>x</button>
            </div>
        );
    }
}

Tile.propTypes = {
    children: PropTypes.string.isRequired,
    onRemove: PropTypes.func.isRequired,
    templatePosition: PropTypes.number.isRequired
};

export default Tile;
