
function allNumber(number){
    let sum =0;
    for(let i =0; i<number.length; i++){
        const element = number[i];
        sum =sum +element;

    }
    let avarage=sum/number.length;
    return avarage;
}

const toalaNumber=allNumber([10,10,10]);
console.log(toalaNumber);

