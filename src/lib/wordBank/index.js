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

const wordBank = {
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

function getRandomWord(partOfSpeech) {
    const words = wordBank[partOfSpeech];
    const index = Math.floor(Math.random() * words.length);
    return words[index];
}

const randomWordFetchers = {};
Object.keys(wordBank).map((part) => {
    randomWordFetchers[part] = () => getRandomWord(part);
    return null;
});

export default randomWordFetchers;
