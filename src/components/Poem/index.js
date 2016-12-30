import React, { Component, PropTypes } from 'react';
import wordBank, { generateWordFetchers } from '../../lib/wordBank';
import modes from './modes/';
import styles from './Poem.css';

class Poem extends Component {
    render() {
        const fetchers = generateWordFetchers(wordBank);
        const template = modes[this.props.mode] || modes.generic;

        return (
            <div className={styles.Poem}>
                {template({ wordBank: fetchers })}
            </div>
        );
    }
}

Poem.propTypes = {
    mode: PropTypes.oneOf([
        'vogon',
        'tolkien'
    ])
};

export default Poem;
