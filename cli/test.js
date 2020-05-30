const { deepEqual, ok } = require('assert')
// importando database
const database = require('./database')

const DEFAULT_ITEM_CADASTRAR = { nome: 'Flash', poder: 'Speed', id: 1 }

describe('Suite de manipulação de heróis', function(){
    
    it('Deve pesquisar um heroi usando arquivos', async function(){
        const expected = DEFAULT_ITEM_CADASTRAR
        const resultado = await database.listar(expected.id)
        // valida se o resultado é igual ao esperado
        ok(resultado, expected)
    })
    
    // it('Deve cadastrar um heroi usando arquivos', async function(){
    //     const expected = DEFAULT_ITEM_CADASTRAR

    //     ok(null, expected)
    // })
})