const { deepEqual, ok } = require('assert')
// importando database
const database = require('./database')

const DEFAULT_ITEM_CADASTRAR = { nome: 'Flash', poder: 'Speed', id: 1 }
const DEFAULT_ITEM_ATUALIZAR = { nome: 'Pantera Negra', poder: 'Força Sobre-Humana', id: 2 }

describe('Suite de manipulação de heróis', function(){
    before(async() => {
        await database.cadastrar(DEFAULT_ITEM_CADASTRAR)
        await database.cadastrar(DEFAULT_ITEM_ATUALIZAR)
    })
    it('Deve pesquisar um heroi usando arquivos', async function(){
        const expected = DEFAULT_ITEM_CADASTRAR
        const [resultado] = await database.listar(expected.id)
        // valida se o resultado é igual ao esperado
        deepEqual(resultado, expected)
    })
    
    it('Deve cadastrar um heroi usando arquivos', async function(){
        const expected = DEFAULT_ITEM_CADASTRAR
        const resultado = await database.cadastrar(DEFAULT_ITEM_CADASTRAR)
        const [actual] = await database.listar(DEFAULT_ITEM_CADASTRAR.id)
        deepEqual(actual, expected)
    })
    it('Deve remover um heroi por ID', async function(){
        const expected = true;
        const resultado = await database.remover(DEFAULT_ITEM_CADASTRAR.id)
        deepEqual(resultado, expected)
    })
    it.only('Deve atualizar um heroi pelo ID', async function(){
        const expected = {
            ...DEFAULT_ITEM_ATUALIZAR,
            nome: 'Batman',
            poder: 'Dinheiro'
        }
        const novoDado = {
            nome: 'Batman',
            poder: 'Dinheiro'
        }
        await database.atualizar(DEFAULT_ITEM_ATUALIZAR.id, novoDado)
        const [resultado] = await database.listar(DEFAULT_ITEM_ATUALIZAR.id)

        deepEqual(resultado, expected)
    })
})