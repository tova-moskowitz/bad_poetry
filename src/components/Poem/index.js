import React, { Component, PropTypes } from 'react';
import styles from './Poem.css';
import wordBank from '../../lib/wordBank';

class Poem extends Component {
    render() {
        const Template = this.props.template;

        return (
            <div className={styles.Poem}>
                <Template wordBank={wordBank} />
            </div>
        );
    }
}

Poem.propTypes = {
    template: PropTypes.func.isRequired
};

export default Poem;
