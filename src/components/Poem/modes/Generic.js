import React from 'react';
import wordBankShape from '../../../shapes/wordBankShape';
import { withIndefiniteArticle } from '../../../wordBank/utils';

function Generic({ wordBank }) {
    const {
        adjective
    } = wordBank;

    const adjWithArticle = withIndefiniteArticle(adjective());

    return (
        <div>
            This is {adjWithArticle} poem.
        </div>
    );
}

Generic.propTypes = {
    wordBank: wordBankShape
};

export default Generic;
