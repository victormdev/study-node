// para ler dados de um arquivo interno
const { readFile } = require('fs')
// para conseguir trabalhar com async/await
const { promisify } = require('util')
// para trabalhar com promisses
const readFileAsync = promisify(readFile)
// forma alternativa de obtenção de dados do JSON
// const dadosJson = require('./heroes.json')


class Database {
    constructor(){
        this.NOME_ARQUIVO = 'heroes.json'
    }
    async obterDadosArquivo(){
        const arquivo = await readFileAsync(this.NOME_ARQUIVO, 'utf8')
        return JSON.parse(arquivo.toString())
    }

    escreverArquivo(){

    }

    async listar(id){
        const dados = await this.obterDadosArquivo()
        const dadosFiltados = dados.filter(item => (id ? (item.id === id) : true))
        return dadosFiltados
    }
}

module.exports = new Database()