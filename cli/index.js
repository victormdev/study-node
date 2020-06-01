// importando o pacote commander
const Commander = require('commander')
// importando o database
const Database = require('./database')
const Hero = require('./hero')
async function main(){
    Commander
    .version('v1')
    // atribui uma váriavel para nome, [value] = obtém o valor
    .option('-n, --nome [value]', "Nome do heroi")
    // atribui uma variável para poder, [value] = obtém o valor
    .option('-p, --poder [value]', "Poder do heroi")
    // pega o ID do heroi para futuras tratativas
    .option('-i, --id [value]', "ID do heroi")
    // ação de cadastro de heroi
    .option('-c, --cadastrar', "Cadastrar um heroi")
    // ação de listagem de herois
    .option('-l, --listar', "Listar os herois")
    // ação de remoção de herois, [value] = obtém o valor
    .option('-r, --remover', "Remove um heroi pelo seu ID")
    .parse(process.argv)

    const hero = new Hero(Commander)
    delete hero.id
    try{
        if(Commander.cadastrar){
            const resultado = await Database.cadastrar(hero)
            if(!resultado){
                console.error('O heroi não foi cadastrado')
                return
            }
            console.log('Heroi cadastrado com sucesso!')
        }
        if(Commander.listar){
            const resultado = await Database.listar()
            console.log(resultado)
            return
        }
        if(Commander.remover){
            const resultado = await Database.remover(hero.id)
            if(!resultado){
                console.error('Não foi possível remover este heroi!')
                return
            }
            console.log('Heroi removido com sucesso!')
        }

    }
    catch(error){
        console.error('Operação não finalizada', error)
    }

}
main()