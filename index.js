// importação do modulo express
const express = require('express');

// importação do modulo do mongoose
const mongoose = require('mongoose');

// importação do modulo do cors
const cors = require('cors');

// criação do app referente ao express
const app = express();

// preparar o servidor para receber json
app.use(express.json());

// uso do cors para desbloqueio de acesso
app.use(cors())

const urldb = "mongodb+srv://renanlazoti:Rl31072004@bdd-do-rs.q4zaa.mongodb.net/BDDdoRs?retryWrites=true&w=majority"
mongoose.connect(urldb,{useNewUrlParser:true,useUnifiedTopology:true});

const default_route = "/api/pc";

const tabelapc = mongoose.Schema({
    nome:{type:String,require},
    email:{type:String,require},
    telefone:{type:String},
    cidades:{type:String}
});



const Computador = mongoose.model("tbpc",tabelapc);

// rota para listar os clientes com endpoint listar
app.get(`${default_route}/listar`,(req,res)=>{
    
    Computador.find().then((dados)=>{
        
        res.status(200).send({output:dados});
    })

    .catch((erro) => res
        .status(500)
        .send({output:`Erro interno ao processar a consulta -> ${erro}`}));
    
});

// rota para cadastrar os clientes com endpoint cadastrar
app.post(`${default_route}/cadastrar`,(req,res)=>{
    
    const comp = new Computador(req.body);
    comp.save().then((dados)=>{
        res.status(201).send({output:`Cadastro realizado`,payload:dados})
    }).catch((erro)=> console.error(`Erro ao tentar cadastrar ${erro}`));

});

// rota para atualizar os clientes com endpoint atualizar
// passagem de argumentos pela url com id do cliente
app.put(`${default_route}/atualizar/:id`,(req,res)=>{
    
    Computador.findByIdAndUpdate(req.params.id,req.body,
        {new:true},(erro,dados)=>{
        if(erro){
            return res.status(500).
            send({output:`Não atualizou -> ${erro}`})
        }
        res.status(200).send({output:`Dados atualizados`})
    })

});

// rota para apagar cliente com endpoint deletar
app.delete(`${default_route}/apagar/:id`,(req,res)=>{
    
    Computador.findByIdAndDelete(req.params.id, (erro,dados)=> {
        if(erro){
            return res.
            status(500).
            send({output:`Erro ao tentar apagar -> ${erro}`})
        }
        res.status(204).send({output:`Apagado com sucesso`});
    });
});

// definição a porta de comunicação do servidor
app.listen(4002,
    ()=>console.log("Servidor on-line em http://localhost:4002"));