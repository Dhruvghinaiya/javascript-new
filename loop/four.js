const myObj = {

    name : 'dhruv',
    emai : 'dhruv@gmail.com',
    city :'amreli',
    pincode : 145785
}

for(const key in myObj){
    console.log(`${key} :- ${myObj[key]}`);   
}

const programming = ['js','java','c++','php'];

for(const key in  programming){
    console.log(programming[key]);
}