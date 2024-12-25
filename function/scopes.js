// let a =10    //
// const b= 20
// var c = 30

if(true){
    let a =10
    const b= 20
    var c = 30
}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){

    const username = "dhruv"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);   
    two()
}

one()


function addone(num){
    return num +1;
}
 
console.log(addone(10));
 
const addtwo = function (num){
    return   num +2;
}

console.log(addtwo(20));
