import React from 'react';
import wordBankShape from '../../shapes/wordBankShape';

function Vogon({ wordBank }) {
    const {
        adjective,
        nounSubject,
        nounObject,
        pronoun,
        possessive,
        verb
    } = wordBank;

    return (
        <div>
            Oh {adjective()} {nounSubject()},
            <br />
            how {adjective()} {pronoun()},
            <br />
            when {possessive()} {nounObject()}{' '}
            doth {verb()}
        </div>
    );
}

Vogon.propTypes = {
    wordBank: wordBankShape
};

export default Vogon;
