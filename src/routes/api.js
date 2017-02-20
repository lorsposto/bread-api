import express from 'express';

const router = express.Router();

// middleware
router.use((req, res, next) => {
    console.log("Something is happening...");
    next();
});

router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

router.get('/', (req, res) => {
    res.json({ message: 'Welcome to Brapp!' });
});

export default router;