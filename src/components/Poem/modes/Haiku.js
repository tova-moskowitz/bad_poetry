import React from 'react';
import wordBankShape from '../../../shapes/wordBankShape';

function Haiku({ wordBank }) {
    const {
        verb,
        nounObject
    } = wordBank;

    return (
        <div>
            Don’t {verb()}, {nounObject()} –
            <br />
            Lovers, stars themselves,
            <br />
            Must {verb()}.
        </div>
    );
}

Haiku.propTypes = {
    wordBank: wordBankShape
};

export default Haiku;
