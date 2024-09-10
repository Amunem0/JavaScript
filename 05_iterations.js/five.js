const coding = ["js",'ruby',"cpp",'ruby']

// coding.forEach((val)=>{
//     console.log(val);
    
// })

// coding.forEach(function (val){
//     console.log(val);
    
// })
  
function print(item){
    console.log(item);
    
}

coding.forEach((print))


coding.forEach((item,index,arr)=>{
    console.log(item, index, arr);
    
}) 


const myCoding=[
    {
        languageName:"javaScript",
        languageFile:"js",
    },
    {
        languageName:"C++",
        languageFile:"cpp",
    },
    {
        languageName:"Ruby",
        languageFile:"rub",
    }
]

myCoding.forEach((items)=>{
    console.log(items.languageName );
    
})