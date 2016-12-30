import React from 'react';
import wordBankShape from '../../../shapes/wordBankShape';

function Vogon({ wordBank }) {
    const {
        interjection,
        adjective
    } = wordBank;

    const renderInterjection = () => interjection({ capitalizeFirstLetter: true });

    return (
        <div>
            {renderInterjection()}, the Vogon is {adjective()}.
        </div>
    );
}

Vogon.propTypes = {
    wordBank: wordBankShape
};

export default Vogon;

// Oh {adjective()} {nounSubject()},
// <br />
// how {adjective()} {pronoun()},
// <br />
// when {possessive()} {nounObject()}{' '}
// doth {verb()}
