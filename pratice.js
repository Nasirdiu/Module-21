//small number
/* let num = [10, 2, 20];

let array = num[0];
for (let i = 0; i <= num.length; i++) {

    let smallNum = num[i];
    if (smallNum < array) {
        array = smallNum;
    }
}
console.log(array); */

//large number



/* let array = num[0];
for (let i = 0; i <= num.length; i++) {

    let smallNum = num[i];
    if (smallNum > array) {
        array = smallNum;
    }
}
console.log(array); */

let num = [10, 2, 20];

const all= Math.max(...num);
console.log(all);

