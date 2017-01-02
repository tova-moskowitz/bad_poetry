import React from 'react';
import wordBankShape from '../../../shapes/wordBankShape';
import { withIndefiniteArticle, pluralize } from '../../../wordBank/utils';

function Haiku({ wordBank }) {
    const {
        adjective,
        nounSubject,
        noun,
        unitOfTime,
        season
    } = wordBank;

    const nounWithArticle = withIndefiniteArticle(nounSubject());
    const pluralNoun = pluralize(noun());
    const unitPhrase = () => {
        const unit = unitOfTime();
        const article = unit === 'day'
            ? 'On a'
            : 'In a';
        return `${article} ${unit}`;
    };

    return (
        <div>
            Toward those {adjective()} {pluralNoun}
            <br />
            We saw {nounWithArticle} descending
            <br />
            {unitPhrase()} in {season()}.
        </div>
    );
}

Haiku.propTypes = {
    wordBank: wordBankShape
};

export default Haiku;
