const input = require('prompt-sync')()

function main(){
    const valor_emprestimos = Number(input('Informe o valor do empréstimo: '))
    const valor_parcela = Number(input('Informe o valor da parcela escolhido: '))

    let saldo_devedor = valor_emprestimos
    let mes = 0
    
    while (saldo_devedor > 0){
        let parcela_atual = 0
        let juros = saldo_devedor * 0.01
        parcela_atual = valor_parcela + juros

    if (saldo_devedor - parcela_atual < 0){
        parcela_atual = saldo_devedor
        saldo_devedor = 0
    }else{
        saldo_devedor -= parcela_atual
    }
    mes += 1
    extrato(juros, valor_parcela, saldo_devedor, mes)
    }

}

function extrato(juros, valor_parcela, saldo_devedor, mes){
    console.log('+============== BLUE TECH POINT ==============+')
    console.log(`               EXTRATO MÊS ${mês}            `)
    console.log(`Saldo devedor anterior            : R$ ${saldo_devedor.toFixed(2)}`)
    console.log(`Parcela do mês fixa               : R$ ${valor_parcela.toFixed(2)}`)
    console.log(`Juros do mês                      : R$ ${juros.toFixed(2)}`)
    console.log(`Parcela total do mês              : R$ ${valor_parcela + juros.toFixed(2)}`)
    console.log(`Novo saldo devedor                : R$ ${saldo_devedor} - ${valor_parcela + juros}`)
}

main()