/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

    const naipes = ["♦️", "♥️", "♣️", "♠️"]
   const numero = cartas[Math.floor(Math.random() * 13)]
   const naipe = naipes[Math.floor(Math.random() * 4)]
   let valor
   if (numero === "A") {
      valor = 11
    } else if (numero === "J" || numero === "Q" || numero === "K") {
      valor = 10
    } else { 
      valor = Number(numero)
    }
  
    
    const carta = {
      texto: numero + naipe,
      valor: valor
    }
  
    return carta
}
console.log('Bem-vindo(a) ao jogo de blackjack')
const iniciarJogo = confirm('Deseja iniciar um novo jogo?')

const sortearCartas = () =>{
  let primeiraCartaUsuario = comprarCarta()
  let segundaCartaUsuario = comprarCarta()
  
  let primeiraCartaComputador = comprarCarta()
  let segundaCartaComputador = comprarCarta()

  let usuarioValor = primeiraCartaUsuario.valor + segundaCartaUsuario.valor
  let usuarioTexto = (`${primeiraCartaUsuario.texto} ${segundaCartaUsuario.texto}`)

  let computadorValor = primeiraCartaComputador.valor + segundaCartaComputador.valor
  let computadorTexto = (`${primeiraCartaComputador.texto} ${segundaCartaComputador.texto}`)

  let fraseUsuario = (`Cartas usuário: ${usuarioTexto} - ${usuarioValor}`)
  let fraseComputador = (`Cartas computador: ${computadorTexto} - ${computadorValor}`)
  console.log(fraseUsuario) 
  console.log(fraseComputador)

  if(usuarioValor === 21 || usuarioValor > computadorValor){
    console.log('O usuário ganhou!')
    }else if(computadorValor === 21 ||computadorValor> usuarioValor){
      console.log('O computador ganhou!')
    }else if(usuarioValor === computadorValor){
      console.log('Empate')
    }else if(usuarioValor > 21){
      console.log('O usuário ganhou!')
    }else if(computadorValor > 21){
      console.log('O usuário ganhou!')
    }
  }


if(iniciarJogo){
  sortearCartas()
}else if(!iniciarJogo){
  console.log('O jogo acabou')
}