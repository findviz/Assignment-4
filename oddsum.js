var readlineSync = require("readline-sync");
let lim = readlineSync.question("enter the limit: ");
let sum=0;
for(let i=1;i<=lim;i++){
    if(i%2==1){
        sum=sum+i;
    }
}
console.log("Sum of odd numbers =",sum);