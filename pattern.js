var readlineSync = require("readline-sync");
let lim = readlineSync.question("Enter the limit: ");
let print ="";
for(let i=1;i<=lim;i++){
    for(let j=1;j<=i;j++){
        print = print + j;
    }
    print = print+"\n";
}
console.log(print);