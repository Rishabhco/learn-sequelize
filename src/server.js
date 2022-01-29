const express =require('express');
var bodyParser = require('body-parser');
const cors = require('cors');   
const db=require('./db/db');
const router =require('./routes/route');

const app = express();
const port = process.env.PORT || 3000;

const corsOptions={
    origin:'*',
    credentials:true,                          //access-control-allow-credentials:true
    optionsSuccessStatus:200                 //allows to return 200 status code
}

app.use(bodyParser.urlencoded({extended:false}));

// parse application/json
app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors(corsOptions));
app.use(express.json());
app.use(router);


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})