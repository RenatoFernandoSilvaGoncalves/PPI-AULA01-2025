import express from "express";

//assegure que essa porta não esteja sendo usada por aplicação no seu computador
const porta = 3000;
const host = "0.0.0.0"; //todas as interfaces

//aplicação servidora
const app = express();

//Para permitir minha aplicação posso manipular parâmetros estão na url
app.use(express.urlencoded({extended: true}));

app.get("/", (requisicao, resposta) => {
   resposta.send(`
                    <html>
                        <head>
                            <title>Página inicial</title>
                        </head>
                        <body>
                            <h1>Bem-vindo ao nosso site</h1>
                        </body>
                    </html>
    `); 
    resposta.end();
});

app.get("/dinheiro", (requisicao, resposta) => {
    resposta.send(`
                    <html>
                        <head>
                            <title>Página inicial</title>
                        </head>
                        <body>
                            <h1>R$ 1.000,00</h1>
                        </body>
                    </html>
        `);
    resposta.end();
});


app.get("/tabuada", (requisicao, resposta) => {

    let numero = requisicao.query.numero;
    let ate = requisicao.query.ate;
    numero = Number(numero);
    ate = Number(ate);

    if (!isNaN(numero) && !isNaN(ate)) {
        let conteudo = `<html>
                            <head>
                                <title>Tabuada do número ${numero}</title>
                            </head>
                            <body>
                                <h1>Tabuada do número ${numero}</h1>
                                <ul>`;
        for (let i = 1; i <= ate; i++){
            conteudo+= `<li>${i} x ${numero} = ${i * numero}</li>`;
        }
        conteudo+= `</ul>
                    </body>
                </html>`;
        resposta.send(conteudo);
        resposta.end();
    }
    else{
        resposta.send(`
                    <html>
                        <head>
                            <title>Tabuada</title>
                        </head>
                        <body>
                            <p>Número inválido!</p>
                        </body>
                    </html>
                `);
        }
});

app.listen(porta, host, () => {   //arrow function 
    console.log("Servidor escutando na porta 3000");
});
