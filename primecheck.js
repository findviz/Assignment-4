var readlineSync = require("readline-sync");
let num = readlineSync.question("enter a number: ");
let flag=0;
for(i=2;i<num/2;i++){
    if(num%i==0){
        flag++;
    }
}
if(flag==0){
    console.log("Entered number is a prime number");
}else{
    console.log("Entered number is no a prime number");
}