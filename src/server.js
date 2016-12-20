import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import api from './routes/api';
import formulas from './routes/formulas';
import ingredients from './routes/ingredients';

var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;

// register routes
app.use('/api', api);
app.use('/api/formulas', formulas);
app.use('/api/ingredients', ingredients);

// start the server
app.listen(port);
console.log(`Listening on port ${port}...`);

mongoose.connect('mongodb://localhost:27017');


export default app;