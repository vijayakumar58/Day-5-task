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

let thu = "geeks for geek"
 let str = function(){
      return thu.split(" ").map(function(title){
return title.replace(title[0],title[0].toUpperCase());
      }).join(" ");
      
    }
    console.log(str());

  //c.Sum of all numbers in an array
  
  let arr1=[11,12,13,14,15,16,17,18,19,20]
  var res=function(){
      let sum=0
      for(var i=0;i<arr1.length;i++){
            sum = sum + arr1[i];
      }
      return sum ;
  }