const {
    get
} = require('axios')

const URL = `https://swapi.co/api/people`

async function obterPersonagens(nome) {
    const url = `${URL}/?search=${nome}&format=json`
    const result = await get(url)

    return result.data.results.map(mapearPersonagens)
}

function mapearPersonagens(item) {
    return {
        nome: item.name,
        peso: item.height
    }
}
module.exports = {
    obterPersonagens
}