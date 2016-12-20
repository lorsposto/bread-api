import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var IngredientSchema = new Schema({
    name: String,
    type: {
        type: String,
        enum: ['FLOUR', 'LIQUID', 'LEVAIN', 'OTHER']
    }

});

export default mongoose.model('Ingredient', IngredientSchema);