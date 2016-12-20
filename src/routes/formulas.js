import express from 'express';
import * as controllers from '../controllers/formulas'

var router = express.Router({ mergeParams: true });

router.route('/')
    .post(controllers.createFormula)
    .get(controllers.listFormulas);

router.route('/:formula_id')
    .get(controllers.getFormula)
    .put(controllers.updateFormula)
    .delete(controllers.deleteFormula);

export default router;