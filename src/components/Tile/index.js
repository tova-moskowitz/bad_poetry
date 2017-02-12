import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import styles from './Tile.scss';

class Tile extends Component {
    render() {
        const {
            children,
            onRemove,
            templatePosition,
            isStaticText
        } = this.props;

        return (
            <div className={cx(styles.Tile, {
                [styles.staticText]: isStaticText
            })}>
                {children}
                <button onClick={() => onRemove(templatePosition)}>x</button>
            </div>
        );
    }
}

Tile.propTypes = {
    children: PropTypes.string.isRequired,
    onRemove: PropTypes.func.isRequired,
    templatePosition: PropTypes.number.isRequired,
    isStaticText: PropTypes.bool
};

Tile.defaultProps = {
    isStaticText: false
};

export default Tile;
