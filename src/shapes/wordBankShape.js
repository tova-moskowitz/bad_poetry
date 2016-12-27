import { PropTypes } from 'react';

export default PropTypes.shape({
    adjective: PropTypes.func,
    adverb: PropTypes.func,
    nounObject: PropTypes.func,
    nounSubject: PropTypes.func,
    possessive: PropTypes.func,
    pronoun: PropTypes.func,
    verb: PropTypes.func
});
