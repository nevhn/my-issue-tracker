const router = require('express').Router();
const controller = require('../controllers/auth.controller');

const use = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

router.post('/register', use(controller.register));
router.post('/login', use(controller.login));

module.exports = router;
