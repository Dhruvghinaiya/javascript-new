const name = ["dhruv","tushar","ajay","darshan"];

// name.forEach(function (val){
//     console.log(val);
    
// });

name.forEach( (item) => {
    // console.log(item);
});


function printMe(item){
    console.log(item);
}
// name.forEach(printMe)


name.forEach((item,index,arr)=>{
    console.log(item,index,arr);
});

const data = [
    {
        name: "dhruv",
        age : 21
    },
    
    {
        name: "tushar",
        age : 25
    },
    
    {
        name: "ajay",
        age : 28
    }
]

data.forEach( (item) =>{
    console.log(item.name);
    
});