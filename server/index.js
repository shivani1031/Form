const express = require('express');
const app = express();
const mongoose = require('mongoose');
// const db='mongodb+srv://shiva:1234@Qwer@cluster0.pld82ah.mongodb.net/mernstack?retryWrites=true&w=majority';
// mongoose.set('strictQuery', false);
// mongoose.connect(db, {
//     useNewUrlParser: true,
 
//     useUnifiedTopology: true,
 
// }).then(()=>{
//     console.log("conn success");
// }).catch((err)=> console.log('no connection'));

// mongoose.set('strictQuery', false);

// mongoose.connect("mongodb://127.0.0.1:27017/e-commerce", {useNewUrlParser:true, useUnifiedTopology:true},
// function dbconn(error)
// {
//     if(error)
//     {
//         console.log("error");
//     }
//     else
//     console.log("succesccccs");
// });
require('./config');

const User = require('./db/User');

app.use(express.json());
// we link the router files to make our router easy
app.use(require('./router/auth'));


//middleware
const middleware = (req,resp,next) =>{
console.log("mid");
next();
}



// app.get('/',(req,resp)=>{
//     resp.send("hello, dthis is home");
// }); 

app.get('/about',middleware,(req,resp)=>{
    console.log("about mid");
    resp.send("hello, this is abouttttttttt");
}); 

app.get('/signup',(req,resp)=>{
    resp.send("hello, this is signup");
}); 

console.log("sdasd");
app.listen(8000);
