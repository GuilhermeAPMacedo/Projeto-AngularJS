var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

var operadoras = [
    {nome:"Oi",codigo:14,categoria:"Celular",preco:"2"},
    {nome:"Vivo",codigo:15,categoria:"Celular",preco:"3"},
    {nome:"Tim",codigo:16,categoria:"Celular",preco:"1"},
    {nome:"Claro",codigo:17,categoria:"Fixo",preco:"2"},
    {nome:"Net",codigo:18,categoria:"Fixo",preco:"3"}
];

var contatos = [
    {id: 1,nome:"Mario Antonio",telefone:"9999-8888",data:"2016-05-16T12:30:30.204Z",operadora: operadoras[0]},
    {id: 2,nome:"João da Silva Gomes",telefone:"88888-7777",data: "2015-10-16T13:50:10.204Z",operadora:operadoras[2]},
    {id: 3,nome:"Maria Antonieta",telefone:"6666-5555",data: "2018-06-28T14:35:30.204Z",  operadora:operadoras[1]},
    {id: 4,nome:"Antonio de Pontevedra",telefone:"4444-5555",data: "2020-12-14T13:50:10.204Z",operadora:operadoras[3]},
    {id: 5,nome:"Arthur Gomes Thiago",telefone:"5555-4444",data: "2021-10-28T14:35:30.204Z",operadora:operadoras[0]}            
];  

app.all('*',function(req,res,next){
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods','PUT,GET,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers','Content-Type');
    next();
})
app.get('/contatos/:id', function(req, res) {
    contatos.forEach(function (contato) {
        if (contato.id == req.params.id) {
            res.json(contato);
            return;
        }
    });
    res.status(404).end();
});
app.get('/contatos', function(req, res) {
    res.json(contatos);
});
app.delete('/contatos', function(req, res) {
    while(contatos.length>0){
        contatos.pop();
    }
    res.json(true);
});
app.post('/contatos', function(req, res) {
    contatos.push(req.body);
    res.json(true);
});
app.get('/operadoras', function(req, res) {
    res.json(operadoras);
});
app.listen(process.env.PORT || 8000);