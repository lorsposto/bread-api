import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const IngredientSchema = new Schema({
    name: String,
    type: {
        type: String,
        enum: ['FLOUR', 'LIQUID', 'LEVAIN', 'OTHER']
    }

});

export default mongoose.model('Ingredient', IngredientSchema);