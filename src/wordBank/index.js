import adjective from './parts/adjective';
import adverb from './parts/adverb';
import conjunction from './parts/conjunction';
import interjection from './parts/interjection';
import nounObject from './parts/nounObject';
import nounSubject from './parts/nounSubject';
import possessive from './parts/possessive';
import preposition from './parts/preposition';
import pronoun from './parts/pronoun';
import verb from './parts/verb';
import noun from './parts/noun';
import { day, month, unitOfTime, season } from './parts/time';
import { capitalizeFirstLetter } from './utils';

export default {
    adjective,
    adverb,
    conjunction,
    interjection,
    noun,
    nounObject,
    nounSubject,
    possessive,
    preposition,
    pronoun,
    verb,
    day,
    month,
    unitOfTime,
    season
};

export function getRandomWord(wordArray, opts) {
    const index = Math.floor(Math.random() * wordArray.length);
    const word = wordArray[index];

    opts = opts || {};

    if (opts.capitalizeFirstLetter) {
        return capitalizeFirstLetter(word);
    }

    return word;
}

export function generateWordFetchers(allWordArrays) {
    const ret = {};
    Object.keys(allWordArrays).map((part) => {
        ret[part] = opts => getRandomWord(allWordArrays[part], opts);
        return null;
    });

    return ret;
}
