//1.Do the below programs in anonymous function & IIFE
//a.Print odd numbers in an array

let arr=[1,2,3,34,54,55,34,32,11,19,17,54]
let odd=[];
let num = function(arr){
    for(i=0;i<arr.length;i++){
         if(arr[i]%2==1){
            odd.push(arr[i])
         }
    }
          return odd;
}
console.log(num(arr)); 

//b.Convert all the strings to title caps in a string array

let txt = ["geeks for geek"]
let str = function (){
      return (txt.charAat(0).toUpperCase()+txt.substr(1).toLowerCase());
    }
    console.log(str(txt));