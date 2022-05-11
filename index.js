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
    senha:{type:String,require},
    cpf:{type:String,require},
});

const tabeladuvida = mongoose.Schema({
    nome:{type:String,require},
    email:{type:String,require},
    telefone:{type:String,require},
    duvida:{type:String,require},
});

const tabelacompra = mongoose.Schema({
    nome:{type:String,require},
    email:{type:String,require},
    telefone:{type:String,require},
    cpf:{type:String,require},
    rg:{type:String,require},
    endereco:{type:String,require},
    casaNumero:{type:String,require}
});

const Computador = mongoose.model("tbpc",tabelapc);

const Duvida = mongoose.model("tbdv",tabeladuvida);

const Compra = mongoose.model("tbbuy",tabelacompra)


// rota para listar os clientes com endpoint listar
app.get(`${default_route}/listar`,(req,res)=>{
    
    Computador.find().then((dados)=>{
        
        res.status(200).send({output:dados});
    })

    

    .catch((erro) => res
        .status(500)
        .send({output:`Erro interno ao processar a consulta -> ${erro}`}));
    
});

app.get(`${default_route}/listarduvida`,(req,res)=>{
    
    Duvida.find().then((dados)=>{
        
        res.status(200).send({output:dados});
    })

    

    .catch((erro) => res
        .status(500)
        .send({output:`Erro interno ao processar a consulta -> ${erro}`}));
    
});

app.get(`${default_route}/listarcompras`,(req,res)=>{
    
    Compra.find().then((dados)=>{
        
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

app.post(`${default_route}/cadastrarduvida`,(req,res)=>{
    
    const duvida = new Duvida(req.body);
    duvida.save().then((dados)=>{
        res.status(201).send({output:`Sua dúvida foi enviada, em breve entraremos em contato`,payload:dados})
    }).catch((erro)=> console.error(`Erro ao tentar enviar sua dúvida ${erro}`));

});

app.post(`${default_route}/cadastrarcompra`,(req,res)=>{
    
    const buy = new Compra(req.body);
    buy.save().then((dados)=>{
        res.status(201).send({output:`Compra Realizada`,payload:dados})
    }).catch((erro)=> console.error(`Erro ao efetuar a compra ${erro}`));

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