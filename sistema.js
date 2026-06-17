const prompt = require("prompt-sync")();

const fs = require('fs'); // Guarda o sistema de arquivos do JS

const dados = fs.readFileSync('dados.json', 'utf-8'); // Lê o arquivo dados.json

const usuarios = JSON.parse(dados); // Transforma o JSON em objeto JS

const nome = prompt("Digite o nome do usuario:"); // Usuario digita o nome
const idade = parseInt(prompt("Digite a idade do usuario:")); // Numero inteiro idade do usuario


const novoUsuario = {
    id: usuarios.length + 1, // Id do usuario é o tamanho do array + 1
    nome,
    idade
};

usuarios.push(novoUsuario); // Adiciona o novo usuario no array
fs.writeFileSync("dados.json", JSON.stringify(usuarios, null, 2)); // Escreve o array atualizado no arquivo dados.json
console.log("Usuario adicionado com sucesso!");
