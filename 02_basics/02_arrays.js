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


console.log(Array.isArray("Hitesh")) //OUTPUT=>false
console.log(Array.from("Hitesh")) // OUTPUT=>["H","i","t","e","s","h"]
console.log(Array.from({name: "hitesh"})) // interesting OUTPUT=>[]

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //OUTPUT=>[100,200,300]
