/* 
SNACK 4

Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro
es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
*/

let array1 = [1, 3, 5];

let array2 = ['a', 'b', 'c'];

function margeArray(array_1, array_2) {
    let arrFusion = [];
    if (array1.lenght === array2.lenght) {
        array1.forEach((element, index) => {
            arrFusion.push(element);
            arrFusion.push(array2[index])
        });
        return arrFusion
    }
}

console.log(margeArray(array1, array2));

