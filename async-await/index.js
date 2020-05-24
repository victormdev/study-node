/*
 PASSOS
 0 - Obter um usuário
 1 - Obter o curso a partir de meu ID
 2 - Obter a minha profissão pelo ID
*/

// importação módulo interno do node.js
const util = require('util')
const obterEnderecoAsync = util.promisify(obterEndereco)

function obterUsuario() {
    // quando der algum problema -> reject (ERRO)
    // quando der sucess -> resolve (OK)
    return new Promise(function resolvePromise(resolve, reject) {
        setTimeout(function () {
            // return reject(new Error('DEU ERRO!'))
            return resolve({
                id: 1,
                nome: 'Victor Macedo Alexandrino dos Santos',
                dataNascimento: new Date()
            })
        }, 1000)

    })
}

function obterCurso(idUsuario) {
    return new Promise(function resolverPromise(resolve, reject) {
        setTimeout(() => {
            return resolve({
                curso: 'Análise e Desenvolvimento de Sistemas',
                profissao: 'Desenvolvedor Full-Stack',
                instituicao: 'Instituto Federal da Bahia'
            })
        }, 2000);

    })
}

function obterEndereco(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            rua: 'Rua Silveira Martins',
            numero: 150
        })
    }, 2000);
}

// async -> automaticamente retornará uma Promise
main()
async function main() {
    try {
        const usuario = await obterUsuario()
        // const telefone = await obterTelefone(usuario.id)
        // const endereco = await obterEnderecoAsync(usuario.id)
        const resultado = await Promise.all([
            obterCurso(usuario.id),
            obterEnderecoAsync(usuario.id)
        ])
        const endereco = resultado[1]
        const curso = resultado[0]
        console.log(`
            Nome: ${usuario.nome},
            Curso: ${curso.curso},
            Profissão: ${curso.profissao},
            Instituição: ${curso.instituicao},
            Endereço: ${endereco.rua} - ${endereco.numero}
        `)

    } catch (error) {
        console.error('DEU ERRO!', error)
    }
}