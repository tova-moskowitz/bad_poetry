import { Router } from 'express';
import wordBank from '../wordBank';

const router = Router();

router.get('/random-words', (req, res) => {
    const results = {};

    Object.keys(wordBank).forEach((part) => {
        results[part] = wordBank[part]();
    });

    res.json(results);
});

router.get('/random-words/:partOfSpeech', (req, res) => {
    const part = req.params.partOfSpeech;
    const wordGetterFn = wordBank[part];

    if (typeof wordGetterFn !== 'function') {
        res.status(404).json({
            error: `${part} is an invalid part of speech`
        });
        return;
    }

    res.json({
        [part]: wordGetterFn(req.query)
    });
});

export default router;
