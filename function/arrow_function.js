const user = {
    username : "dhruv",
    price : 457,
    welcomeMessage : function() {
        console.log(`${this.username} welcome to website`);
    }
}

user.welcomeMessage()
user.username ="tushar"
user.welcomeMessage()


// function chai(){    
//     let username = "dhruv"
//     console.log(this);     //this keyword is not use in function
//     console.log(this.username);     //this keyword is not use in function
// }
// chai()


const one = () => {
    let username = "tushar"
    // console.log(this);
    console.log(this.username);

}
// one()


const addTwo = (num1,num2) =>{
    return num1 +num2

}
console.log(addTwo(20,45));


const data =  (name) => console.log(`hello ${name}`);
data("dhruv")


const add  = (num1,num2) => (num1 + num2)
console.log( add(10,20));

 