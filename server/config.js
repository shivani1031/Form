
const mongoose = require('mongoose');
//mongoose.connect('mongodb://127.0.0.1:27017/e-commerce',);
mongoose.set('strictQuery', false);


mongoose.connect("mongodb://127.0.0.1:27017/abc", {useNewUrlParser:true, useUnifiedTopology:true},
function dbconn(error)
{
    if(error)
    {
        console.log("error");
    }
    else
    console.log("succesccccs");
});