import express from 'express';
import * as controllers from '../controllers/ingredients'


const router = express.Router({ mergeParams: true });

router.route('/')
    .post(controllers.createIngredient)
    .get(controllers.listIngredients);

router.route('/types')
    .get(controllers.listIngredientTypes);

router.route('/types/:type')
    .get(controllers.listIngredientsByType);

router.route('/types/:type/:ingredient_id')
    .get(controllers.getIngredient)
    .put(controllers.updateIngredient)
    .delete(controllers.deleteIngredient);

router.route('/:ingredient_id')
    .get(controllers.getIngredient)
    .put(controllers.updateIngredient)
    .delete(controllers.deleteIngredient);

export default router;