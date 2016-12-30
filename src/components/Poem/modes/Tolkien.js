import React from 'react';
import wordBankShape from '../../../shapes/wordBankShape';

function Tolkien({ wordBank }) {
    const {
        verb
    } = wordBank;

    return (
        <div>
            The elf doth {verb()}.
        </div>
    );
}

Tolkien.propTypes = {
    wordBank: wordBankShape
};

export default Tolkien;
