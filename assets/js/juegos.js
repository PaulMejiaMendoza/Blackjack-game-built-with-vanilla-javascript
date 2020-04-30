/* 
2C = 2 of clubs = 2 de treboles 
2D = TWO OF DIAMONDS
2H = TWO OF HEARTS
2S = TWO OF SPADES
*/

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A','J','Q','K']


let puntosJugador = 0,
    puntosComputadora = 0;
//Referencias HTML
const btnPedir = document.querySelector('#btnPedir')
const smallJugador = document.querySelector('#smallJugador')
const smallComputadora = document.querySelector('#smallComputadora')
const divCartasJugador = document.querySelector('#jugador-cartas')




//Esta funcion crea un nuevo deck
const crearDeck = () => {
    for (let i = 2; i <= 10; i++) {
       for (let tipo of tipos) {
           deck.push(i + tipo)
       } 
    }
    for (let tipo of tipos) {
        for (let especial of especiales) {
            deck.push(especial + tipo)
        }
    }
/*     console.log(deck);
 */    deck = _.shuffle( deck )
    console.log(deck);
    return deck
    
}

crearDeck();

//esta funcion me permite tomar una nueva carta
const pedirCarta = () => {
    if (deck.length === 0) {
        throw 'No hay cartas en el deck'
    }
    const carta = deck.pop();
    
    return carta

}

   /*  pedirCarta(); */
    const valorCarta = ( carta ) => {
        const valor = carta.substring(0, carta.length - 1);
        return  (isNaN( valor) ) ? (valor === 'A' ) ? 11 : 10
                : valor * 1;


    }




 // Eventos

 btnPedir.addEventListener('click',() => {
     const carta = pedirCarta();
     puntosJugador = puntosJugador + valorCarta( carta )     
     smallJugador.innerHTML = puntosJugador

     const imgCarta = document.createElement('img')
     console.log(imgCarta);
     imgCarta.src = `assets/cartas/${ carta }.png`
     imgCarta.classList.add( 'carta' )
     divCartasJugador.append( imgCarta )
     
    if ( puntosJugador > 21) {
        console.warn('Lo siento mucho, has perdido');
        btnPedir.disabled = true;
    }else if( puntosJugador === 21) {
        console.warn('Ganaste');
        btnPedir.disabled = true;
    }

 } )

