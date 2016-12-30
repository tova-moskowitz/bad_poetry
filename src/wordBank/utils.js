import NLP from 'nlp_compromise';

export function isVowel(letter) {
    return ['a', 'e', 'i', 'o', 'u'].indexOf(letter) > -1;
}

export function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

export function withIndefiniteArticle(word) {
    const startsWithVowel = isVowel(word.charAt(0));

    if (startsWithVowel) {
        return `an ${word}`;
    }

    return `a ${word}`;
}

export function pluralize(noun) {
    return NLP.noun(noun).pluralize();
}
