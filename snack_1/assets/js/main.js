/* 
Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine.
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
  }
];

//Calcola quanto pesano tutte le zucchine.

let sum = 0;

zucchine.forEach((zucchina) => {
    let peso = zucchina.peso;
    //console.log(peso, lunghezza);

    //sommo alla somma zucchine.peso
    sum += peso;
});
// risultato di somma + peso delle zucchine
console.log(sum);



