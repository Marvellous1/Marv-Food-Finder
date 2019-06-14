const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const items = require('./routes/api/items');  

const app = express();

// BodyParser Middleware
app.use(bodyParser.json());

// use routes
app.use('/api/items', items);

// Serve static assets if in producton
if(process.env.NODE_ENV === 'production') {
    // Set statc folder
    app.use(express.static('client/build'));

    app.get('*' ,(req, res) =>{
        res.sendFile(path.resolve(__dirname, 'client', 'build' , 'index.html'));
    });
}
     
// connect to Mongo
mongoose.connect("mongodb+srv://Marvellous:144301Abc@cluster0-hyydk.mongodb.net/test?retryWrites=true&w=majority",
{ useNewUrlParser: true } )
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, ()=> console.log(`Server started on port ${PORT} `));
