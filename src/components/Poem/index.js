import React, { Component, PropTypes } from 'react';
import wordBank from '../../wordBank';
import styles from './Poem.scss';

const titles = ['Mr.', 'Mrs.', 'Ms.', 'Miss', 'Dr.', 'Rabbi', 'Reverend', 'Father', 'Mother', 'Grandmother', 'Grandfather', 'Sister', 'Brother', 'Uncle', 'Aunt'];
const lastNames = ['Smith', 'Goldberg', 'Harris', 'Mathers', 'Gardenia'];

class Poem extends Component {
    render() {
        // console.log(wordBank.verb());
        const { template } = this.props;

        // Temporary handling of poem until we get random word fetchers working
        return (
            <div className={styles.Poem}>
                {template.map((part) => {
                    const fetcher = wordBank[part];
                    if (typeof fetcher === 'function') {
                        return fetcher();
                    }

                    return part;
                }).join(' ')}
            </div>
        );
    }
}

Poem.propTypes = {
    template: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Poem;
