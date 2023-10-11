// Definições básicas
let continuar = true
let dados = [] // nomeAluno, idadeAluno, anoEscolar, tipoMatricula, dataNascimento

// Função para cadastro
function cadastrar() {
	let perguntarNome = prompt('Insira o nome  completo do aluno').toUpperCase()
	let perguntarIdade = Number(prompt('Insira a idade do aluno'))
	let perguntarAnoEscolar = prompt('Insira o ano escolar do aluno').toUpperCase()
	let perguntarTipoMatricula = prompt('Insira o tipo da matricula').toUpperCase()
	let perguntarAnoNasc = prompt('Insira a data de nascimento do aluno').toUpperCase()
	const alunos = {
		nome: perguntarNome,
		idade: perguntarIdade,
		anoEscolar: perguntarAnoEscolar,
		TipoMatricula: perguntarTipoMatricula,
		anoNascimento: perguntarAnoNasc
	}
	dados.push(alunos)
	console.log(dados)
}

// Função para listar
function listar() {
	let lista = `	-----------------------------------------------------------------------------------------
	LISTAGEM DE ALUNOS:
	-----------------------------------------------------------------------------------------
	|	ÍNDICE	|       NOME        |   IDADE  |  ANO ESCOLAR  | TIPO DA MATRICULA | DATA DE NASCIMENTO |
	-----------------------------------------------------------------------------------------\n`
	for (let obj of dados) {
		let listaObj = `	|	${dados.indexOf(obj)}	|		${obj.nome}		|   ${obj.idade}  |  ${obj.anoEscolar}  | ${obj.TipoMatricula} | ${obj.anoNascimento} |\n`
		lista += listaObj
	}
	console.log(lista)
}

// Função para buscar
function buscar() {
	let pergunta = prompt('Digite o que você procura')
	let lista = `	-----------------------------------------------------------------------------------------
	LISTAGEM DE ALUNOS:
	-----------------------------------------------------------------------------------------
	|	ÍNDICE	|       NOME        |   IDADE  |  ANO ESCOLAR  | TIPO DA MATRICULA | DATA DE NASCIMENTO |
	-----------------------------------------------------------------------------------------\n`
	for (let obj of dados) {
		let listaObj = `	|	${dados.indexOf(obj)}	|		${obj.nome}		|   ${obj.idade}  |  ${obj.anoEscolar}  | ${obj.TipoMatricula} | ${obj.anoNascimento} |\n`
		for(let propriedade in obj) {
			if(obj[propriedade] === pergunta) {
				lista += listaObj
				break
			}
		}
	}console.log(lista)
}

// Função para remover
function remover() {
	let indice = Number(prompt('Insira o índice do aluno que você deseja remover'))
	dados.splice(indice, 1)
}

function editar() {
	listar()
	let edicao = true
	let index = Number(prompt('Insira o índice que você deseja editar'))
	while(edicao === true) {
		let chave = prompt('Insira o dado que você deseja editar').toUpperCase()
		if(chave === 'NOME') {
			novoValor = prompt('Insira o novo nome do aluno').toUpperCase()
			dados[index].nome = novoValor
		} else if(chave === 'IDADE') {
			novoValor = Number(prompt('Insira a nova idade do aluno'))
			dados[index].idade = novoValor
		} else if(chave === 'ANO ESCOLAR' || chave === 'ANO') {
			novoValor = prompt('Insira o novo ano escolar do aluno').toUpperCase()
			dados[index].anoEscolar = novoValor
		} else if(chave === 'TIPO DA MATRICULA' || chave === 'TIPO DA MATRÍCULA' || chave === 'TIPO') {
			novoValor = prompt('Insira o novo tipo de matrícula').toUpperCase()
			dados[index].TipoMatricula = novoValor
		} else if(chave === 'DATA DE NASCIMENTO' || chave === 'DATA') {
			novoValor = prompt('Insira a nova data de nascimento do aluno').toUpperCase()
		} else {
			console.log('Dado inserido não encontrado. Dados disponíveis: Nome, Idade, Ano escolar, Tipo da matrícula e Data de nascimento.')
		}

		let continuacao = prompt('Deseja continuar a edição?').toUpperCase()
		if(continuacao === 'NAO' || continuacao === 'NÃO' || continuacao === 'N') {
			edicao = false
		}
	} 
	console.log(`	-----------------------------------------------------------------------------------------
		LISTAGEM DE ALUNOS:
		-----------------------------------------------------------------------------------------
		|	ÍNDICE	|       NOME        |   IDADE  |  ANO ESCOLAR  | TIPO DA MATRICULA | DATA DE NASCIMENTO |
		-----------------------------------------------------------------------------------------\n
		|	${index}	|		${dados[index].nome}		|   ${dados[index].idade}  |  ${dados[index].anoEscolar}  | ${dados[index].TipoMatricula} | ${dados[index].anoNascimento} |\n`)
}

// Função para sair
function sair() {
	continuar = false
	console.log("Tchau! Para reiniciar, atualize a aba do navegador.")
}

// Loop para perguntar ao usuário
while (continuar) {
	// Formatar pergunta
	let pergunta  = "ESCOLA RIO PRETO\n"
		pergunta += "-------------------------\n"
		pergunta += "Escolha uma opção:\n"
		pergunta += "1. Cadastrar aluno\n"
		pergunta += "2. Listar alunos\n"
		pergunta += "3. Procurar aluno\n"
		pergunta += "4. Remover aluno\n"
		pergunta += "5. Editar aluno\n"
		pergunta += "6. Sair"

	// Guardar resposta
	let resposta = Number(prompt(pergunta))

	// Identificar resposta e chamar função
	switch (resposta) {
		case 1:
			cadastrar()
			break
		case 2:
			listar()
			break
		case 3:
			buscar()
			break
		case 4:
			remover()
			break
		case 5:
			editar()
			break
		case 6:
			sair()
			break
	}
}