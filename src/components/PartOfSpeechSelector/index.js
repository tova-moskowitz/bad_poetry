import React, { PropTypes } from 'react';
import styles from './PartOfSpeechSelector.scss';
import { parts } from '../../wordBank';

const PartOfSpeechSelector = props => (
    <div className={styles.PartOfSpeechSelector}>
        <select onChange={props.onChange}>
            {parts.map((part, i) => (
                <option value={part} key={i}>
                    {part}
                </option>
            ))}
        </select>
    </div>
);

PartOfSpeechSelector.propTypes = {
    onChange: PropTypes.func.isRequired
};

export default PartOfSpeechSelector;
