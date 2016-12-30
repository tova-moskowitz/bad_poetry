import adjective from './adjective';
import adverb from './adverb';
import conjunction from './conjunction';
import interjection from './interjection';
import nounObject from './nounObject';
import nounSubject from './nounSubject';
import possessive from './possessive';
import preposition from './preposition';
import pronoun from './pronoun';
import verb from './verb';
import { capitalizeFirstLetter} from '../../lib/';

export default {
    adjective,
    adverb,
    conjunction,
    interjection,
    nounObject,
    nounSubject,
    possessive,
    preposition,
    pronoun,
    verb
};

function getRandomWord(wordArray, opts) {
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
