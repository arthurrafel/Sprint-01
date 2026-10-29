import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("boas-vindas à Central de Informações da Escola! ");
});


app.get('/Status', (req, res) => {
    res.json({ status: 'online', sprint: 1 });
});

app.get("/Escola", (req, res) => {
  res.json({Nome:'Senai Valinhos'});
});

app.get("/Cursos", (req, res) => {
  res.json([{
    "id": 1, "nome": "Desenvolvimento de Sistemas"},
     {"id": 2, "nome" : "Redes de Computadores" },
     {"id": 3, "nome": "Administração"} ])
});

app.get("/Professor", (req, res) => {
    res.json([
        {
            nome: "Eduardo",
            disciplina: "Programação Back-End 1",
            curso: "Desenvolvimento de Sistemas"
        },
        {
            nome: "Felipe Mamprim",
            disciplina: "Infraestrutura e Segurança de Redes",
            curso: "Redes de Computadores"
        },
        {
            nome: "Edson",
            disciplina: "Gestão Organizacional e Finanças",
            curso: "Administração"
        }
    ]);
});

app.get('/Ajuda', (req, res) => {
  res.send(
    "Rotas disponíveis no sistema:\n\n" +
    "- GET /Pagina inicial: Apresenta a mensagem de boas-vindas.\n" +
    "- GET /status : Informa se o servidor está online.\n" +
    "- GET /Escola : Exibe informações básicas da instituição.\n" +
    "- GET /Cursos : Lista os cursos disponíveis na escola.\n" +
    "- GET /Professor : Exibe dados do professor e sua disciplina.\n" +
    "- GET /Ajuda : Mostra este guia de orientações."
  );
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor em http://localhost:${PORT} `);
});
