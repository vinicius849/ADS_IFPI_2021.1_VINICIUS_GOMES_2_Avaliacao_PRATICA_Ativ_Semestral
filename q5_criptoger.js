const prompt = require('prompt-sync')()

function main(){
    const frase = prompt('Insira uma frase: ')

    criptografia(frase)

    console.log(frase)

}

function criptografia(frase){
    let caractere = ''

    for (i = 0; i < frase.lenght; i++)
    caractere = frase[i]

    const condicao = frase.lenght / 2

    if (i < condicao){

        let nova_frase_1 = ''
        for(let i = frase.lenght - 1; i >= 0; i--){
            nova_frase_1 = nova_frase_1 + frase[i]
        }
        return nova_frase_1

    }

}

main()