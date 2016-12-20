import Ingredient from '../models/ingredient';
import _ from 'lodash';

var createIngredient = (req, res) => {
    console.log(req.body);
    var ingredient = new Ingredient();
    ingredient.name = req.body.name;
    ingredient.type = req.body.type;

    ingredient.save((err) => {
        if (err)
            res.send(err);
        res.json('Ingredient created!');
    });
};

var listIngredients = (req, res) => {
    Ingredient.find(req.query.type ? {type: _.toUpper(req.query.type)} : {}, (err, ingredients) => {
        if (err)
            res.send(err);
        res.json(ingredients);
    });
};

var getIngredient = (req, res) => {
    Ingredient.findById(req.params.ingredient_id, (err, ingredient) => {
        if (err)
            res.send(err);
        res.json(ingredient);
    });
};

var updateIngredient = (req, res) => {
    Ingredient.findById(req.params.ingredient_id, (err, ingredient) => {
        if (err)
            res.send(err);
        ingredient.name = req.body.name;
        ingredient.type = req.body.type;

        ingredient.save((err) => {
            if (err)
                res.send(err);
            res.json("Ingredient updated!")
        });
    });
};

var deleteIngredient = (req, res) => {
    Ingredient.remove({_id: req.params.ingredient_id}, (err, ingredient) => {
        if (err)
            res.send(err);
        res.json({message: "Ingredient deleted!"});
    });
};

export { createIngredient as createIngredient };
export { listIngredients as listIngredients };
export { getIngredient as getIngredient };
export { updateIngredient as updateIngredient };
export { deleteIngredient as deleteIngredient };