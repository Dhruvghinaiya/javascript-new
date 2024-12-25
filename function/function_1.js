
function sayHello(){
    console.log("hello dhruv");
}
sayHello()


function addTwoNumber( a, b){   //parameter
     console.log(a + b);
}

    addTwoNumber(10,20) //argument

function addNumber( a, b){   //parameter
     let result = a + b

     return result
}

// let result  = addNumber(40,15)
// console.log("Result : ",result);


function loging(username="tushar"){
    if(username==undefined){
        return "please enter username"
    }
     return `${username} login success.`
}

console.log(loging("dhruv"));
