//print odd numbers in an array using anonymous function
let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13]
let temp=[]
var oddnumbers=function (arr){
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2!=0){
            temp.push(arr[i])
        }
    }
return temp;
}

console.log(oddnumbers(arr))


// sum of all numbers in an array using anonymous function
let arr1=[10,10,10,10,10]
var sum=function(arr1){
    for(let i=0;i<arr1.length;i++){
        var a=arr1[i]+arr1[i]+arr1[i]+arr1[i]+arr1[i]
    }
    return a;
}
console.log(sum(arr1))


//print odd numbers in an array using iife function
// (function (){
//      console.log(2*2);
// }
// )()



///print odd numbers arrow function
    f=[1,2,3,4,5,6,7]
 let   temp5=[]
const oddnumbers3=(f)=>{
    for(var i=0;i<f.length;i++){
        if(f[i]%2!=0){
            temp5.push(f[i])
        }
    }
    return temp5;   
}

console.log(oddnumbers3(f));

//always use semi colon before the iife function
(function (a,b){
    console.log(a*b);
})(10,5);




