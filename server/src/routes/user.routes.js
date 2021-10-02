const router = require('express').Router();
const controller = require('../controllers/user.controller');

const use = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

router.get('/', use(controller.getAllUsers));
router.get('/:id', use(controller.getUser));

module.exports = router;
