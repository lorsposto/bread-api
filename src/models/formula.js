import mongoose from 'mongoose';
var Schema = mongoose.Schema;


var FormulaSchema = new Schema({
    name: String,
    value: Number, // total weight
    ingredients: [
        {
            ingredient: {
                type: Schema.Types.ObjectId,
                ref: 'Ingredient'
            },
            value: Number
        }
    ]

});

export default mongoose.model('Formula', FormulaSchema);
