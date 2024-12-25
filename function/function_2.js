function calculateCartPrice(...num1){

    return num1
}

console.log(calculateCartPrice(200,350,496));

const user = {
    username  :"dhruv",
    price : 188
}

function handleObject(obj){
    console.log(`username is ${obj.username} and price is ${obj.price}`);
}

 handleObject(user)
 handleObject({
    username : "tushar",
    price : 145
 })