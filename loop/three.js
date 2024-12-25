//for of loop

const arr = [1,2,3,4,5]

for (const element of arr) {
    console.log(element);    
}


const greeting = "hello dhruv";

for(const item of greeting){
    console.log(item);
}


//map 

const map = new Map()
map.set('name','dhruv')
map.set('email','dhruv@gmail.com')
map.set('city','amreli')    
map.set('email','dhruv@gmail.com')  //unique value only store
console.log(map);


for (const [key,value] of map) {
        console.log(key,':-',value);        
}

