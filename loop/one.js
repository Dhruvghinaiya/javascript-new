for(let a = 1;a<=10;a++){
    console.log(a);
}

for(let i = 1;i<=10;i++){
    console.log(`outer loop ${i}`);
    
    for( let j =1;j<=5;j++){
        console.log(`inner loop ${j}`);
    }
}

let name = ["dhruv","tushar","ajay","darshan"];
for(let i = 0;i<name.length;i++){
    console.log(name[i]);
    
}