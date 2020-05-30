// para ler dados de um arquivo interno
const { readFile, writeFile } = require('fs')
// para conseguir trabalhar com async/await
const { promisify } = require('util')
// para trabalhar com promisses
const readFileAsync = promisify(readFile)
const writeFileAsync = promisify(writeFile)
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

    async escreverArquivo(dados){
        await writeFileAsync(this.NOME_ARQUIVO, JSON.stringify(dados))
        return true
    }

    async cadastrar(heroi){
        const dados = await this.obterDadosArquivo()
        const id = (heroi.id <= 2 ? heroi.id : Date.now())
        //concatena os objetos
        const heroiComId = {
            id,
            ...heroi
        }
        //concatena os objetos
        const dadosFinal = [
            ...dados,
            heroiComId
        ]
        const resultado = await this.escreverArquivo(dadosFinal)
        return resultado
    }

    async listar(id){
        const dados = await this.obterDadosArquivo()
        const dadosFiltados = dados.filter(item => (id ? (item.id === id) : true))
        return dadosFiltados
    }
}

module.exports = new Database()