export function isVowel(letter) {
    return ['a', 'e', 'i', 'o', 'u'].indexOf(letter) > -1;
}

export function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}
