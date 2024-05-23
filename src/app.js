const express = require('express');
const myConnection = require('express-myconnection');
const mysql = require('mysql');
const { engine } = require('express-handlebars');
const bodyParser = require('body-parser');

const app = express();
app.set('port', 4000);

app.use(myConnection(mysql,{
    host:"localhost",
    user:"root",
    password:"",
    port:3306,
    database:"movies"
},'single'));

