import Ingredient from '../models/ingredient';
import _ from 'lodash';

const createIngredient = (req, res) => {
    console.log(req.body);
    const ingredient = new Ingredient();
    ingredient.name = req.body.name;
    ingredient.type = req.body.type;

    ingredient.save((err) => {
        if (err)
            res.send(err);
        res.json('Ingredient created!');
    });
};

const listIngredients = (req, res) => {
    Ingredient.find(req.query.type ? {type: _.toUpper(req.query.type)} : {}, (err, ingredients) => {
        if (err)
            res.send(err);
        res.json(ingredients);
    });
};

const listIngredientsByType = (req, res) => {
    const host = req.get('host'),
        protocol = req.get('protocol'),
        baseUrl = req.baseUrl,
        origUrl = req.originalUrl,
        fullUrl = `${host}${origUrl}`;
    console.log('host', req)
    Ingredient.find(req.params.type ? {type: _.toUpper(req.params.type)} : {}, (err, ingredients) => {
        if (err)
            res.send(err);
        let response = _.map(ingredients, (value, index) => {
            return _.extend(
                _.merge({}, value.toJSON()),
                { _links: { _self: `${fullUrl}/${value._id}` } }
            );
        });
        res.json(_.extend(response, {
            _links: {
                _self: fullUrl,
            }
        }));
    });
};

const listIngredientTypes = (req, res) => {
    const host = req.get('host'),
        baseUrl = req.baseUrl,
        origUrl = req.originalUrl,
        fullUrl = `${host}${origUrl}`;
    const types = _.map(
        Ingredient.schema.path('type').enumValues,
        (value, index) => ( {
            id: index,
            name: _.toLower(value),
            _links: {
                _self: fullUrl,
                items: {
                    href: `${fullUrl}/${_.toLower(value)}`
                }
            }
        } )
    );
    res.json(types);
};


const getIngredient = (req, res) => {
    const host = req.get('host'),
        baseUrl = req.baseUrl,
        origUrl = req.originalUrl,
        fullUrl = `${host}${origUrl}`;
    Ingredient.findById(req.params.ingredient_id, (err, ingredient) => {
        if (err)
            res.send(err);
        const response = _.extend(_.merge({}, ingredient.toJSON()), {
            _links: {
                _self: fullUrl,
            }
        });
        res.json(response);
    });
};

const updateIngredient = (req, res) => {
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

const deleteIngredient = (req, res) => {
    Ingredient.remove({_id: req.params.ingredient_id}, (err, ingredient) => {
        if (err)
            res.send(err);
        res.json({message: "Ingredient deleted!"});
    });
};

export { createIngredient as createIngredient };
export { listIngredients as listIngredients };
export { listIngredientTypes as listIngredientTypes};
export { listIngredientsByType as listIngredientsByType};
export { getIngredient as getIngredient };
export { updateIngredient as updateIngredient };
export { deleteIngredient as deleteIngredient };