function largeNumner(number) {
    let prameter = number[0];
    for (i = 0; i < number.length; i++) {
        const element = number[i];
        if (element > prameter) {
            prameter = element;
           
        }
    }
    return prameter;
}

const totalAge = largeNumner([55, 20, 10, 40, 100, 1,99]);
const toSmall = largeNumner([-2, -5, -10, -100])
console.log(toSmall);
console.log(totalAge);

