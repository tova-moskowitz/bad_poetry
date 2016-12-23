import adjective from './adjective';
import adverb from './adverb';
import nounObject from './nounObject';
import nounSubject from './nounSubject';
import possessive from './possessive';
import pronoun from './pronoun';
import verb from './verb';

const wordBank = {
    adjective,
    adverb,
    nounObject,
    nounSubject,
    possessive,
    pronoun,
    verb
};

function getRandom(partOfSpeech) {
    const words = wordBank[partOfSpeech];
    const index = Math.floor(Math.random() * words.length);
    return words[index];
}

const randomGetters = {};

Object.keys(wordBank).map((part) => {
    randomGetters[part] = () => getRandom(part);
    return null;
});

export default randomGetters;
