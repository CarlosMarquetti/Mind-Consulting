const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const routes = require('./models/routes');

const app = express();
// const { MongoClient } = require('mongodb');
// const url = 'mongodb://localhost:27017';
// const client = new MongoClient(url);
// const dbName = 'myProject';

mongoose.connect('mongodb://localhost:27017/Projeto-Mind',{
},function(err, db){
    if(err){
        console.log('log de erro',err)
    }else{
        console.log('MongoDB CONECTADO');
        db.collection('Usuarios').findOne({'_id':'teste'},function(err,doc)
        {
            if(err) throw err;
            console.dir(doc);
            db.close();
        });
    }
})

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(routes);

app.listen(3000,function(){
    console.log('Server runing on port 3000')
})