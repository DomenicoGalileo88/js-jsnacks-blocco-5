/* 
SNACK 2
Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm.
Infine stampa separatamente quanto pesano i due gruppi di zucchine.

*/

const zucchine = [
  {
    varieta: "Faenza",
    peso: 20,
    lunghezza: 15,
  },
  {
    varieta: "Faenza",
    peso: 22,
    lunghezza: 15,
  },
  {
    varieta: "Faenza",
    peso: 10,
    lunghezza: 15,
  },
  {
    varieta: "Faenza",
    peso: 30,
    lunghezza: 9,
  },
  {
    varieta: "Faenza",
    peso: 40,
    lunghezza: 15,
  },
  {
    varieta: "Faenza",
    peso: 50,
    lunghezza: 15,
  },
  {
    varieta: "Faenza",
    peso: 20,
    lunghezza: 12,
  },
  {
    varieta: "Faenza",
    peso: 26,
    lunghezza: 20,
  },
  {
    varieta: "Faenza",
    peso: 20,
    lunghezza: 22,
  },
  {
    varieta: "Faenza",
    peso: 25,
    lunghezza: 15,
  },
];

 let lunghezzaZucchineMin15 = zucchine.filter((zucchina) => zucchina.lunghezza < 15 );

 console.log(lunghezzaZucchineMin15);

 let lunghezzaZucchineMag15 = zucchine.filter((zucchina) => zucchina.lunghezza > 15);
 
 console.log(lunghezzaZucchineMag15);

 //fare la somma dei pesi dell'array lunghezzaZucchineMin15
somma = 0;

 lunghezzaZucchineMin15.forEach((zucchina) => {
    somma += zucchina.peso;
 })

console.log(somma);

lunghezzaZucchineMag15.forEach((zucchina) => {
  somma += zucchina.lunghezza;
});

console.log(somma);