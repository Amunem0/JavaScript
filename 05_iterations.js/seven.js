const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNum = myNumbers.map((num) => num + 10);
console.log(newNum);


const myNums=[1,2,3]

// const myTotal=myNums.reduce(function (acc,currval){
//     console.log(`acc: ${acc} and current Value: ${currval}`);
//     return acc+currval;
// },0);

const myTotal=myNums.reduce((acc,currval)=>{
    console.log(`acc: ${acc} and current Value: ${currval}`);
    return acc+currval;
},0);


console.log(myTotal);
