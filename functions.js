var readlineSync = require("readline-sync");
console.log(" 1 for addition\n 2 for subtraction\n 3 for multiplication\n 4 for division");
let n1 = readlineSync.question("enter your operation: ");
let n2 = readlineSync.question("enter your first number: ");
let n3 = readlineSync.question("enter your second number: ");
n1 =parseInt(n1);
n2 =parseInt(n2);
n3 =parseInt(n3);
switch(n1){
    case 1:
        let a=add(n2,n3);
        console.log(n2,"+",n3,"=",a);
        break;
    case 2:
        let b=subtract(n2,n3);
        console.log(n2,"-",n3,"=",b);
        break;
    case 3:
        let c=multiply(n2,n3);
        console.log(n2,"*",n3,"=",c);
        break;
    case 4:
        let d=divide(n2,n3);
        console.log(n2,"/",n3,"=",d);
        break;
    default :
    console.log("enter valid operation");
    break;
}
function add(a,b){
    let sum=a+b;
    return sum;
}
function subtract(a,b){
    let diff=a-b;
    return diff;
}
function multiply(a,b){
    let prod=a*b;
    return prod;
}
function divide(a,b){
    let div=a/b;
    return div;
}