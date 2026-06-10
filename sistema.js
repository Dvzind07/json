const fs = require('fs'); // Guarda o sistema de arquivos do JS

const dados = fs.readFileSync('dados.json', 'utf-8'); // Lê o arquivo dados.json

const usuarios = JSON.parse(dados); // Transforma o JSON em objeto JS

usuarios.push({
    id: 3,
    nome: "Tarcisio",
    idade: 40
});

console.log("Usuários cadastrados no .json:", usuarios);

fs.writeFileSync(
    'dados.json',
    JSON.stringify(usuarios, null, 2)
);

console.log("Usuários cadastrados");