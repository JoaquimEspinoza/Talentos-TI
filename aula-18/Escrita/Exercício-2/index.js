/**
 * 
 * Considere que você tenha acesso a um "array" que é composto somente de números. Crie uma função para cada um dos itens abaixo, realizando as operações pedidas:
 * 
 * 1) Escreva uma função que imprime cada valor do "array" em uma linha.
 * 
 * 2) Escreva uma função que imprime cada um dos valores do "array" divididos por 10.
 * 
 * 3) Escreva uma função que cria um novo array contendo somente os números pares do "array original" e, depois, imprima esse novo array.
 * 
 * 4) Escreva uma função que cria um novo array contendo strings no seguinte formato: "O elemento do índice 'i' é: 'numero'". Depois, imprima esse novo array.
 * 
 * 5) Escreva uma função que imprime no console o maior e o menor números contidos no "array original".
 * 
**/


const arrayOriginal = [ 80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55 ]
let arrayNovo = []

function imprimirLista (itens) {
    console.log(itens)
}

function imprimirValoresDivididos (itens) {
    for(let numero of itens) {
        numero /= 10
        console.log(numero)

    }
}

function filtrarNumerosPares (itens) {
    for(let numero of itens) {
        if(numero % 2 === 0) {
            arrayNovo.push(numero)
        }
    }
    console.log(arrayNovo)
}

function identificarElementos (itens) {
    arrayNovo = [...itens]
    for (let numero of arrayNovo) {
        let i = arrayNovo.indexOf(numero)
        arrayNovo[i] = `O elemento do índice ${i} é: ${numero}`
    }
    console.log(arrayNovo)
}

function imprimirMaiorMenor (itens) {
    arrayNovo = [...itens]
    let maior = arrayNovo[0]
    let menor = arrayNovo[0]

    for(let i = 1; i < arrayNovo.length; i++) {
        if (arrayNovo[i] > maior) {
            maior = arrayNovo[i]
        } else if (arrayNovo[i] < menor) {
            menor = arrayNovo[i]
        }
    }
    console.log(`Maior: ${maior} Menor: ${menor}`)
}

imprimirLista(arrayOriginal)
imprimirValoresDivididos(arrayOriginal)
filtrarNumerosPares(arrayOriginal)
identificarElementos(arrayOriginal)
imprimirMaiorMenor(arrayOriginal)