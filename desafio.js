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
    function comprarCarta() {
      // Cria array de cartas
      const cartas = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    
      // Cria array de naipes
      const naipes = ["♦️", "♥️", "♣️", "♠️"]
    
      // Sorteia uma carta
      const numero = cartas[Math.floor(Math.random() * 13)]
    
      // Sorteia um naipe
      const naipe = naipes[Math.floor(Math.random() * 4)]
    
      let valor
    
      // Verifica se é uma das letras e coloca o valor correspondente na variável valor
      if (numero === "A") {
        valor = 11
      } else if (numero === "J" || numero === "Q" || numero === "K") {
        valor = 10
      } else { // Se nao for uma das letras, só converte a string para número
        valor = Number(numero)
      }
    
      // Cria um objeto da carta com as propriedades que vamos precisar: texto e valor
      const carta = {
        texto: numero + naipe,
        valor: valor
      }
    
      return carta
    }

    alert('Bem vindo ao jogo de blackjack!')
    let start = confirm('Deseja iniciar uma nova rodada?')
    
    let cartaJogador = []
    let cartaPc = []
    
    if(start){  
          let comprar = false
          while (!comprar) {
             cartaJogador.push(comprarCarta())
             cartaJogador.push(comprarCarta())
        
             cartaPc.push(comprarCarta())
             cartaPc.push(comprarCarta())
             
       if((cartaJogador[0].valor === 11 && cartaJogador[1].valor === 11) || (cartaPc[0].valor === 11 && cartaPc[1].valor === 11)){
          cartaJogador = []
          cartaPc = []
    
          }else{
             comprar = true
          }
       } 
          let textoJogador = 'Cartas do jogador: '
          let textoPc = 'Cartas do computador: '
    
          let valorJogador = 0
          let valorPc = 0
    
          for(i =0; i < cartaJogador.length; i++){
                textoJogador += cartaJogador[i].texto + " "
                valorJogador += cartaJogador[i].valor 
             }
          for(i = 0; i <cartaPc.length; i++){
                textoPc += cartaPc[i].texto + " "
                valorPc += cartaPc[i].valor
    }
          let comprandoCarta = true
          while (comprandoCarta) {
             if(valorJogador > 21){
                
                break
             }
             let confirmCompra = confirm(
                (`${textoJogador}\nA carta revelada do computador é ${cartaPc[0].texto}.\nDeseja comprar mais uma carta?`))
    
             if(confirmCompra){
                let carta = comprarCarta()
                cartaJogador.push(carta)
    
                valorJogador += carta.valor
                textoJogador += `${carta.texto}`
             }else{
                comprandoCarta = false 
             }
          }
    
          while (valorPc <= valorJogador && valorJogador <= 21) {
             let carta = comprarCarta()
             cartaPc.push(carta)
    
             valorPc += carta.valor
             textoPc += `${carta.texto}`
          }
    
          let terminarGame = ""
          if(valorJogador > 21){
             terminarGame = "O PC GANHOU"
          }else if(valorPc > 21){
             terminarGame = 'O JOGADOR GANHOU'
          }else if( valorJogador > valorPc){
             terminarGame = 'O JOGADOR GANHOU'
          }else if(valorPc > valorJogador){
             terminarGame = 'O COMPUTADOR GANHOU'
          }else{
             terminarGame = "EMPATE"
          } 
          alert((`${textoJogador}\nPontuação do jogador: ${valorJogador}\n${textoPc}\nPontuação do computador: ${valorPc}\n${terminarGame}`))
    
       
     }else{
            alert('O jogo acabou.')
            }