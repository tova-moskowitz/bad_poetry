import { Router } from 'express';
import wordBank, { getRandomWord } from '../wordBank';

const router = Router();

router.get('/random-word/:partOfSpeech', (req, res) => {
    const partOfSpeech = req.params.partOfSpeech;
    const arr = wordBank[partOfSpeech];

    if (!arr) {
        res.status(404).json({
            error: `${partOfSpeech} is an invalid part of speech`
        });
        return;
    }

    res.json({
        [partOfSpeech]: getRandomWord(arr)
    });
});

router.post('/random-words', (req, res) => {
    const words = req.body && req.body.words;
    const results = {};

    if (!words) {
        res.status(404).json({
            error: 'No words specified'
        });
        return;
    }

    words.map((pos) => {
        const arr = wordBank[pos];
        if (arr) {
            results[pos] = getRandomWord(arr);
        }
        return true;
    });

    res.json(results);
});

export default router;
