/* const fibo =[0,1];

for(let i =2; i<=10;i++){

    fibo[i] =fibo[i-1] + fibo[i-2];

}
console.log(fibo); */

function fiboNumber(num){
    if(typeof num!='number'){
        return 'This a no number'
    }
    else if(num < 2){
        return 'This a posstive number'
    }
    let fibo =[0,1]
    for(let i=2 ;i<=num;i++){
        fibo [i] =fibo[i-1] + fibo[i-2];
    }
    return fibo;
}

const total =fiboNumber(10);
console.log(total);

