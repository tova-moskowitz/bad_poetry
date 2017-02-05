import NLP from 'nlp_compromise';

const VOWELS = ['a', 'e', 'i', 'o', 'u'];

export function isVowel(letter) {
    return VOWELS.indexOf(letter) > -1;
}

export function startsWithVowel(word) {
    return isVowel(word.charAt(0));
}

export function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

export function withIndefiniteArticle(word) {
    if (startsWithVowel(word)) {
        return `an ${word}`;
    }

    return `a ${word}`;
}

export function pluralize(noun) {
    return NLP.noun(noun).pluralize();
}
