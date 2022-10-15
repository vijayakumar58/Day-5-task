//1.Do the below programs in anonymous function & IIFE
//a.Print odd numbers in an array

let arr=[1,2,3,34,54,55,34,32,11,19,17,54]
let odd=[];
let nu=function(arr){
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2==1){
            odd.push(arr[i])
        }else{

        }
    }
}
console.log(odd);