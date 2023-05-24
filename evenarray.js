var readlineSync = require("readline-sync");
let n = readlineSync.question("Enter no. of elements in the array: ")
console.log("Enter the values of the array: ")

const array=[];
let count=0;

for(let i=0;i<n;i++){
    array[i]=readlineSync.question(" ");
    if (array[i]%2==0){
        count++;
    }
}
console.log("Number of even numbers in the array is: "+count);