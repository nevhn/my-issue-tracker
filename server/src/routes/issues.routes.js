const router = require('express').Router();
const controller = require('../controllers/issues.controller');

const use = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

router.get('/', use(controller.getAllIssues));
router.get('/:username', use(controller.getIssue));
router.post('/add', use(controller.addIssue));
router.delete('/', use(controller.deleteIssue));

module.exports = router;
