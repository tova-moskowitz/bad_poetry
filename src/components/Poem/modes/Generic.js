import React from 'react';
import wordBankShape from '../../../shapes/wordBankShape';
import { isVowel } from '../../../lib/';

function Generic({ wordBank }) {
    const {
        adjective
    } = wordBank;

    const renderAdjectivePlusArticle = () => {
        const adj = adjective();
        const article = isVowel(adj.charAt(0)) ? 'an' : 'a';

        return `${article} ${adj}`;
    };

    return (
        <div>
            This is {renderAdjectivePlusArticle()} poem.
        </div>
    );
}

Generic.propTypes = {
    wordBank: wordBankShape
};

export default Generic;
