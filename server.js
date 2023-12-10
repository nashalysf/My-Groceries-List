const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.use(require('./routes'));

//tell mongoose which database to connect to
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/GroceryList', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//log mongo queries being executed
mongoose.set('debug', true);

app.listen(PORT, () => console.log(`Connected on localhost:${PORT}`));