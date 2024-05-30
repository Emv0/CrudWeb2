const express = require('express');
const myConnection = require('express-myconnection');
const mysql = require('mysql');
const { engine } = require('express-handlebars');
const bodyParser = require('body-parser');

const app = express();
app.set('port', 4000);

app.use(bodyParser.urlencoded({
    extended:true
}));
app.use(bodyParser.json());
app.engine('.hbs',engine({
    extname:'.hbs'
}));
app.set('view engine','hbs');

app.set('view',__dirname+'/views');

app.use(myConnection(mysql,{
    host:"localhost",
    user:"root",
    password:"",
    port:3306,
    database:"crudnodejs"
},'single'));

app.listen(app.get('port'),()=>{
    console.log('Listening on port', app.get('port'));
});

app.use('/',moviesRoutes);
