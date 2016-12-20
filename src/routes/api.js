import express from 'express';

var router = express.Router();

// middleware
router.use((req, res, next) => {
    console.log("Something is happening...");
    next();
});

router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

router.get('/', (req, res) => {
    res.json({ message: 'Welcome to Brapp!' });
});

export default router;