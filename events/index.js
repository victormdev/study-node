const EventEmitter = require('events')
class MeuEmissor extends EventEmitter {

}
const meuEmissor = new MeuEmissor()
const nomeEvento = 'usuario:click'
meuEmissor.on(nomeEvento, function (click) {
    console.log('TIMER |', click)
})


meuEmissor.emit(nomeEvento, 'Contagem iniciada!')
meuEmissor.emit(nomeEvento, 'Segundos: ')

let count = 0
setInterval(function () {
    meuEmissor.emit(nomeEvento, 'Segundos: ' + (count++))

}, 1000)

const stdin = process.openStdin()

function main() {
    return new Promise(function (resolve, reject) {
        stdin.addListener('data', function (value) {
            // console.log(`Voce digitou: ${value.toString().trim()}`)
            return resolve(value)
        })
    })
}
main().then(function (resultado) {
    console.log('resultado', resultado.toString())
})