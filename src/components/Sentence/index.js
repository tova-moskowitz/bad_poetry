import React, { Component } from 'react';
import wordBank from '../../lib/wordBank';

const {
    verb,
    adjective,
    nounSubject,
    pronoun,
    possessive,
    nounObject,
} = wordBank;

export default class Sentence extends Component {
    render() {
        return (
            <div>
                Oh {adjective()} {nounSubject()},
                <br />
                how {adjective()} {pronoun()},
                <br />
                when {possessive()} {nounObject()}{' '}
                doth {verb()}
            </div>
        );
    }
}
