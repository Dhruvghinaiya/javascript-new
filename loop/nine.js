const myNums = [1,2,3]

// const total = myNums.reduce(function (acc,curr_val){
//     console.log(`acc: ${acc} and curr_Val : ${curr_val}`);
//     return acc + curr_val
// },0)

const total = myNums.reduce((acc,curr)=> acc+curr,2 ) 
console.log(total);

const items = [
    {
        name:'mobile',
        price :5000
    },
    {
        name:'laptop',
        price :25000
    },
    {
        name:'charger',
        price :280
    }
]


const totalPay = items.reduce((acc,curr)=> acc+curr.price,0)

console.log(totalPay);
