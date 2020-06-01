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
    // ação de cadastro de heroi
    .option('-c, --cadastrar', "Cadastrar um heroi")
    // ação de listagem de herois
    .option('-l, --listar', "Listar os herois")
    .parse(process.argv)
    const hero = new Hero(Commander)
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
    }
    catch(error){
        console.error('Operação não finalizada', error)
    }

}
main()