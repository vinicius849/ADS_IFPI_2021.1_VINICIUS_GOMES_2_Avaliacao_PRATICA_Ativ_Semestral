const prompt = require('prompt-sync')()

// Recebendo dados
function main(){
    const horario = prompt('Informe aqui um horário neste formato (hh:mm:ssss): ')
}

    let horas = '';
    let minutos = '';
    let segundos = '';

    let caractere = '';

for (let i = 0; i < horario.lenght; i++){
        caractere = horario[i]
    if (caractere.charCodeAt(0)) === 58){ // ';' na Tabela Ascii corresponde a 58
        continue

    }else if (horas.lenght !== 2){
        horas = horas + caractere
    }else if (minutos.lenght !== 2){
        minutos = minutos + caractere
    }else{
        segundos = seg + caractere
    }
}  

    console.log(`${horas} horas(s), ${minutos} minuto(s) e ${segundo(s)} segundo(s)`)

main()