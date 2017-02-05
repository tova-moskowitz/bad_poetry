import partsOfSpeech from './partsOfSpeech';
import * as utils from './utils';

/**
 * Handle transformation options for a word as specified in the endpoint query.
 For example, a user may request a word to be capitalized or pluralized.
 They may pass ?key=true or just ?key. Either one will trigger the transform.

 GET /api/random-words/noun/?pluralize&withIndefiniteArticle
 GET /api/random-words/noun/?capitalizeFirstLetter=true

 * @param {object} transformOpts The transform options requested for this word
    e.g. { pluralize: true } or { withIndefiniteArticle: '' }
 * @param {string} word The word to be transformed
 * @returns {string} Returns the original word with any appropriate
 transformations applied
 */
function handleTransformOpts(transformOpts, word) {
    let transformed = word;

    Object.keys(transformOpts).forEach((opt) => {
        const transformFn = utils[opt];

        if (typeof transformFn === 'function') {
            transformed = transformFn(word);
        }
    });

    return transformed;
}

function getRandomWord(wordArray, transformOpts) {
    const index = Math.floor(Math.random() * wordArray.length);
    let word = wordArray[index];

    transformOpts = transformOpts || {};

    // Apply any requested transformations
    word = handleTransformOpts(transformOpts, word);

    return word;
}

function generateWordFetchers() {
    const ret = {};
    Object.keys(partsOfSpeech).forEach((part) => {
        ret[part] = opts => getRandomWord(partsOfSpeech[part], opts);
    });

    return ret;
}

export default generateWordFetchers();
