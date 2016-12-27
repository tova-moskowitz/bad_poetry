import React from 'react';
import wordBankShape from '../../shapes/wordBankShape';

function Tolkien({ wordBank }) {
    const {
        nounSubject,
        pronoun,
        verb
    } = wordBank;

    return (
        <div>
            May it be a {nounSubject()} to {pronoun()},
            when all other {nounSubject()}s have {verb()} out
        </div>
    );
}

Tolkien.propTypes = {
    wordBank: wordBankShape
};

export default Tolkien;
