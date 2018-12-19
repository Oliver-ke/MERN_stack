const express = require('express');
const mongoose = require('mongoose');
const bodyPerser = require('body-parser');
const cors = require('cors')
const itemEndPoint = require('./route/api/items');
const users = require('./route/api/user')

const app = express();
app.use(cors());
//bodyParser middleware
app.use(bodyPerser.json());


//DB config
const db = require('./config/keys').mongoURI;

// connect to mongoDB

mongoose.connect(db, { useNewUrlParser: true }).then(() =>{
    console.log('MongoDB connected')
}).catch((err) =>{
    console.log(err)
});

// use Route
app.use('/api/items',itemEndPoint);
app.use('/api/users',users);
const port = process.env.PORT || 5000;

app.listen(port, () =>{
    console.log(`server connected on port ${port}`)
});