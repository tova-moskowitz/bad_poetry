import adjective from './parts/adjective';
import adverb from './parts/adverb';
import conjunction from './parts/conjunction';
import interjection from './parts/interjection';
import nounObject from './parts/nounObject';
import nounSubject from './parts/nounSubject';
import possessive from './parts/possessive';
import preposition from './parts/preposition';
import pronounSubject from './parts/pronounSubject';
import pronounObject from './parts/pronounObject';
import archaicPronoun from './parts/archaicPronoun';
import verb from './parts/verb';
import noun from './parts/noun';
import { dayName, monthName, unitOfTime, season } from './parts/time';

function getRandom(wordArray) {
    const index = Math.floor(Math.random() * wordArray.length);
    return wordArray[index];
}

const wordBank = {
    adjective,
    adverb,
    archaicPronoun,
    conjunction,
    interjection,
    noun,
    nounObject,
    nounSubject,
    possessive,
    preposition,
    pronounSubject,
    pronounObject,
    verb,
    dayName,
    monthName,
    unitOfTime,
    season
};

export const parts = Object.keys(wordBank);

const wordBankFetchers = {};

parts.forEach((part) => {
    wordBankFetchers[part] = () => getRandom(wordBank[part]);
});

export default wordBankFetchers;
