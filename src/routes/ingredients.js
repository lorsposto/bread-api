import express from 'express';
import * as controllers from '../controllers/ingredients'


var router = express.Router({ mergeParams: true });

router.route('/')
    .post(controllers.createIngredient)
    .get(controllers.listIngredients);

router.route('/:ingredient_id')
    .get(controllers.getIngredient)
    .put(controllers.updateIngredient)
    .delete(controllers.deleteIngredient);

export default router;