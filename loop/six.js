const programming = ['js','java','c++','php'];

const values = programming.forEach( (item)=>{
    console.log(item);
    return item    
})

console.log(values);


const nums =  [1,2,3,4,5]

const newNums  = nums.filter( (item)=>item>2)

console.log(newNums);

