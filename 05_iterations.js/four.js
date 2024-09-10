const myObj={
    js:'Javascript',
    cpp:'C++',
    rb:'Ruby',
}

for (const key in myObj) {
    console.log(`${key} :- ${myObj[key]}`);
    
}  

const programming = ['Javascript','C++','Ruby']

for (const i in programming) {
    console.log(i);
    console.log(programming[i]);
    
}