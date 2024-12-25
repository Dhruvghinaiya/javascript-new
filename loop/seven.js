const myNums = [1,2,3,4,5]

// const newNums = myNums.map((num)=> num+10 )

const newNums = myNums.map((num)=> num*10).map((num)=>num-3).filter((item) => item>20)

console.log(newNums);



