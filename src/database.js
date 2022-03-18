const mongoose = require('mongoose');
const URI = process.env.MONGODB_URI 
        ? process.env.MONGODB_URI
        : 'mongodb://localhost/database';

mongoose.connect(URI,{
    useNewUrlParser: true,
    useCreateIndex: true
});

const connection = mongoose.Connection;

connection.once('open', () => {
    console.log('DB is connected');

});