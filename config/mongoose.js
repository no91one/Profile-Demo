const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/profiledemo', { useUnifiedTopology: true, useNewUrlParser: true,useCreateIndex:true });
mongoose.connect('mongodb+srv://kofive:atlaspass@cluster0.hw44i.mongodb.net/profiledemo?retryWrites=true&w=majority', { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open', function () {
    console.log('Connected to Database :: MongoDB');
});


module.exports = db;