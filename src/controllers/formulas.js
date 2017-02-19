import _ from 'lodash';
import Formula from '../models/formula';

const createFormula = (req, res) => {
    const formula = new Formula();
    formula.name = req.body.name;
    _.each(req.body.ingredients, (value, key) => {
        formula.ingredients.push(value);
    });

    formula.save((err) => {
        if (err)
            res.send(err);
        res.json('Formula created!');
    });
};

const listFormulas = (req, res) => {
    Formula.find((err, formulas) => {
        if (err)
            res.send(err);
        res.json(formulas);
    });
};

const getFormula = (req, res) => {
    Formula.findById(req.params.formula_id, (err, formula) => {
        if (err)
            res.send(err);
        res.json(formula);
    });
};

const updateFormula = (req, res) => {
    Formula.findById(req.params.formula_id, (err, formula) => {
        if (err)
            res.send(err);
        formula.name = req.body.name;
        formula.save((err) => {
            if (err)
                res.send(err);
            res.json("Formula updated!")
        });
    });
};

const deleteFormula = (req, res) => {
    Formula.remove({_id: req.params.formula_id}, (err, formula) => {
        if (err)
            res.send(err);
        res.json({message: "Formula deleted!"});
    });
};

export { createFormula as createFormula };
export { listFormulas as listFormulas };
export { getFormula as getFormula };
export { updateFormula as updateFormula };
export { deleteFormula as deleteFormula };