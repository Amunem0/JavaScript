const heros=["thor","ironman","spiderman"]
const dc=["batman","flassh","superman"]

// heros.push(dc);
// console.log(heros);

// console.log(heros[3][1]);


// const all_heros=heros.concat(dc);
// console.log(heros);

//SPREAD OPERATOR

const all_new_heros = [...heros,...dc];
console.log(all_new_heros);
