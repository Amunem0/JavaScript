const tinderUser =new Object()

console.log(tinderUser);

tinderUser.user="aryan"
tinderUser.email="aryan@gmail.com"
tinderUser.age=18

// console.log(tinderUser);
// console.log(Object.values(tinderUser));
// console.log(Object.keys(tinderUser));
// console.log(Object.entries(tinderUser));


const course={
    courseName:"Js",
    price:"999",
    courseInstrutor:"aryan"
}

//DESTRUCTURING
const {courseInstrutor}=course
console.log(courseInstrutor);

const {courseInstrutor:instructor}=course
console.log(instructor);