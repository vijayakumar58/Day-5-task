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
  
  let arr1=[11,12,13,14,15,16,17,18,19,20];
     var res=function (arr1){
      var sum=0;
      for(var i=0;i<arr1.length;i++){
            sum=sum+arr1[i];
      }
         return sum;
  }
  console.log(res(arr1));

  //d.Return all the prime numbers in an array

  let arr2=[11,12,13,14,15,16,17,18,19,20];
   var prime=function(arr2){
      var primeNumber=[];
       arr2.forEach((element) => {
            let factor=0;
            for (let i=0;i<=element;i++){
                  if (element%i ===0){
                        factor++
                  }
            }
            if(factor===2){
                  primeNumber.push(element)
            }
       }) 
       return primeNumber;
      }
      console.log(prime(arr2));

//e.Return all the palindromes in an array

let arr3=["madam","apple","appa","google"];
  let palin=[];
var pal=function(arr3){
      for(var i=0;i<arr3.length;i++){
           palin.push( arr3[i].split("").reverse().join(""))
      }
      return palin;
}
console.log(pal(arr3));

//f.Return median of two sorted arrays of the same size.

var arr4=[1,4,7,3];
var arr5=[12,19,15,18];
var ord=[...arr4.sort(),...arr5.sort()];
    let median=function(ord){
      var ord1=ord.length/2;
      let ord2=(ord[ord1]+ord[ord1+1])/2;
              return ord2
}
console.log(median(ord));

//g.Remove duplicates from an array

    var arr6=["apple","orange","mango","painapple","orange","lemon","mango"]
    let dup=function(arr6){
       var set=new Set(arr6);
       var arr7=[...set];
       return arr7;
    }
    console.log(dup(arr6));

//h.Rotate an array by k times

var arr8=["apple","orange","mango","painapple","lemon"];
  var k=2;
      let rot=function(arr8){
            for( var i=0;i<=k;i++){
           var or=arr8.pop();arr8.unshift(or);
            }
              return arr8;
}
console.log(rot(arr8));

//3.Do the below programs in arrow functions.
//a.Print odd numbers in an array

let arr9=[1,2,3,34,54,55,34,32,11,19,17,54]
let odd9=[];
let num1 =(arr)=>{
    for(i=0;i<arr9.length;i++){
         if(arr9[i]%2==1){
            odd9.push(arr9[i])
         }
    }
          return odd9;
}
console.log(num1(arr9)); 

//b.Convert all the strings to title caps in a string array

let thu1 = "geeks for geek"
 let str1 = ()=>{
      return thu1.split(" ").map(function(title){
return title.replace(title[0],title[0].toUpperCase());
      }).join(" ");
      
    }
    console.log(str1());

    //c.Sum of all numbers in an array
  
  let arr11=[11,12,13,14,15,16,17,18,19,20];
  var res= ()=>{
   var sum=0;
   for(var i=0;i<arr11.length;i++){
         sum=sum+arr1[i];
   }
      return sum;
}
console.log(res());

//d.Return all the prime numbers in an array

let arr12=[11,12,13,14,15,16,17,18,19,20];
var prime1=()=>{
   var primeNumber1=[];
    arr12.forEach((element) => {
         let factor=0;
         for (let i=0;i<=element;i++){
               if (element%i ===0){
                     factor++
               }
         }
         if(factor===2){
               primeNumber1.push(element)
         }
    }) 
    return primeNumber1;
   }
   console.log(prime1());

//e.Return all the palindromes in an array

let arr13=["madam","apple","appa","google"];
  let palin1=[];
var pal1=()=>{
      for(var i=0;i<arr13.length;i++){
           palin1.push( arr13[i].split("").reverse().join(""))
      }
      return palin1;
}
console.log(pal1());
