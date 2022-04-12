
/* 
SNACK 3 
Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)

*/

let stringa = 'ciao';
//console.log(stringa.split('').reverse().join(''));

function reverseString(string) {
    return string.split('').reverse().join('');
};

let reverseStringResult = reverseString(stringa);
console.log(stringa);
console.log(reverseStringResult);