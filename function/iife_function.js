// Immerdiately Invoed Function Expressions (IIFE)


(function db_coonect(){
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTION LOSS ${name}`);
})('blog')
