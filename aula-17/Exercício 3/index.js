const palavras = ["Oi", "sumido,", "tudo", "bem?", "Saudades"]
let frase = ""

function juntarPalavras(palavras){
    for(let palavra of palavras) {
        frase = frase + `${palavra} `
    }
    console.log(frase)
}

juntarPalavras(palavras)

