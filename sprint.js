function sumOfN(n) {
    var x=0;
    for (var i=0;i<=n;i++){
        x+=i;
    }
    return x;
}


function factorialOfN(n) {
    var y=1
        for(var i=n; i>0; i-=1){
            y=y*i
            
        }
     return y 
 }

function repeatString(string, num) {
    var str=""
     for (var i=0;i<num;i++){
         str+=string
     }
     return str
 }

function countMinMax(min, max) {
    var result =0
     for(var i=min; i<max; i++){
         result++
     }
     return result 
 } 

function sumMinToMax(min, max) {
    var result=0;
        for(var i=max-1;i>=min;i--){
            result+=i;
        }
        return result
    } 

function productMinToMax(min, max) {
    var result=1;
        for(var i=max-1;i>=min;i--){
            result*=i;
        }
        return result
    } 
function hey (){console.log ("hey")}
function multiplyBy10NTimes(num, n) {
    result=num;
     for (var i=n;i>0;i--){
         result*=10;
     }
     return result 
 } 

function countCharAtIndex(string1, index, string2) {
    var result =0
     for (var i=0; i<string2.length; i++ ){
         if (string1[index]===string2[i]){
             result ++
         }
     }
     return result 
 } 

function reverseString(string) {
    var str="";
       for(var i=string.length-1;i>=0;i--){
           str+=string[i]
       }
       return str
   } 

function getIndexOf(string, char) {
    var result =0
     for (var i=0; i<string.length; i++){
         if (string[i]===char){
             result=i;break;
         }
     }
     return result 
 }  

function sumEven(number1, number2) {
    var result=0;
     for (i=number2-1;i>number1;i--){
         if (i%2===0){
             result+=i;
         }
     }return result
 } 

function primeCounter(number) {
    var prime=0
     for (var i=2; i<=number ; i++){
         if (i%i===0 && i%1===0&&i%2!==0) {
             prime++
             
         }
     }
     return prime
 } 

function game () {
    for (var i=0; i<2; i++) {
    x=prompt("write")
    res= false
    if (x=="P") {res=true; return res}
    else { i--
    } }}


function sumOfFirstAndLast(number) {

    for (var i=number; i>10;i=i/10){
        console.log(i)
    }
    return Math.floor(i)+(number%10)
} 