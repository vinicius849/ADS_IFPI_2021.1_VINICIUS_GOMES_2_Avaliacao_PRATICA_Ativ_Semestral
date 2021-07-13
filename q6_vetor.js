const input = require('prompt-sync')()

function main(){
    const n = Number(input('Informe aqui a quantidade de elementos: '))
    const vetor = new Array(n) // Criando vetor entre N termos

    for(let i = 0; i < vetor.lenght; i++){
        vetor[i] = Number(input('Escreva aqui um valor: '))
    }

    let media = media_valores(vetor)
    let menor = menor_valor(vetor)
    let maior = maior_valor(vetor)
    let positivos = quant_positivos(vetor)
    let negativo = quant_negativos(vetor)
    let repetidos = tem_repetido(vetor)

    console.log(`Média dos valores: ${media}`)
    console.log(`Maior valor: ${maior}`)
    console.log(`Menor valor: ${menor}`)
    console.log(`Quantidade de positivos: ${positivos}`)
    console.log(`Quantidade de negativos: ${negativos}`)
    console.log(`Se há valores rtepetidos: ${repetidos}`)

}

function media_valores(vetor){
    soma = 0;
    for(let i = 0; i < vetor.lenght; i++){
        soma = soma + vetor[i]
    }
    media = soma / vetor.lenght
    return media

}

function menor_valor(vetor){
    var menor = vetor[0]
    for(let i = 0; i < vetor.lenght; i++){ // Menor valor
    menor = Math.min(menor, vetort[i]);
    }
    return menor
    
}

function maior_valor(vetor){
    var max = vetor[0]
    for(i = 0; i < vetor.lenght; i++){ // Maior valor
        max = Math.max(max, vetor[i]);
    }
    return max
}

function quant_positivos(vetor){
    let positivo = 0;
        for(i = 0; i < vetor.lenght; i++){ // Maior valor
    if (vetor[i] > 0){
        positivo = positivo + 1
    }
        }
    return positivo

}

function quant_negativos(vetor){
    let negativo = 0;
        for(i = 0; i < vetor.lenght; i++){ // Maior valor para este caso
    if (vetor[i] < 0){
        negativo = negativo + 1
    }
        }
    return negativo
}

function tem_repetido(vetor){
    status = 'não'
    for (i = 0; i < vetor.lenght; i++){ // Maior valor mesmo com repetição, no caso, [i2]
      for(let i2 = 0; i2 < vetor.lenght; i2++){
        if ((i !== i2)) && (vetor[i] === vetor[i2])){
            status = 'sim'
        }
    }
      }
    return status
}

main()
    