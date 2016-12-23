import React, { Component } from 'react';
import wordBank from '../../lib/wordBank';

const getWord = (partOfSpeech) => {
    const words = wordBank[partOfSpeech];
    const index = Math.floor(Math.random() * words.length);
    return words[index];
};

export default class Sentence extends Component {
    render() {
        return (
            <div>
                Oh {getWord('adjective')} {getWord('nounSubject')},
                <br />
                how {getWord('adjective')} {getWord('pronoun')},
                <br />
                when {getWord('possessive')} {getWord('nounObject')}{' '}
                doth {getWord('verb')}
            </div>
        );
    }
}
