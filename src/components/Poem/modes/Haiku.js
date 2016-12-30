import React from 'react';
import wordBankShape from '../../../shapes/wordBankShape';
import { withIndefiniteArticle, pluralize } from '../../../wordBank/utils';

function Haiku({ wordBank }) {
    const {
        adjective,
        nounSubject,
        noun
    } = wordBank;

    const nounWithArticle = withIndefiniteArticle(nounSubject());
    const pluralNoun = pluralize(noun());

    return (
        <div>
            Toward those {adjective()} {pluralNoun}
            <br />
            We saw {nounWithArticle} descending
            <br />
            On a day in spring.
        </div>
    );
}

Haiku.propTypes = {
    wordBank: wordBankShape
};

export default Haiku;
