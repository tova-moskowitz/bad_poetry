import { Router } from 'express';
import wordBank, { getRandomWord } from '../wordBank';

const router = Router();

router.post('/random', (req, res) => {
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
