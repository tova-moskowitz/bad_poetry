import { PropTypes } from 'react';

export default PropTypes.shape({
    adjective: PropTypes.arrayOf(PropTypes.string.isRequired),
    adverb: PropTypes.arrayOf(PropTypes.string.isRequired),
    nounObject: PropTypes.arrayOf(PropTypes.string.isRequired),
    nounSubject: PropTypes.arrayOf(PropTypes.string.isRequired),
    possessive: PropTypes.arrayOf(PropTypes.string.isRequired),
    pronoun: PropTypes.arrayOf(PropTypes.string.isRequired),
    verb: PropTypes.arrayOf(PropTypes.string.isRequired)
});