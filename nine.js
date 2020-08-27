if(condition){
    //do something
}else{
    //do something
}


var a = 9878978;
if(a%2==0){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is odd`)
}

Number 9878978 is even


var a = 9878978;
if(a%2==0)
    console.log(`Number ${a} is even`)
else
    console.log(`Number ${a} is odd`)


var a = 9;
if(a%2==0){
    console.log(`Number ${a} is even`);
}else if(a%3==0){
    console.log(`Number ${a} is divisble by 3`);
}
else{
    console.log(`Number ${a} is odd`);
}
Number 9 is divisble by 3


var a = 12;
if(a%2==0){
    console.log(`Number ${a} is even`);
}
if(a%3==0){
    console.log(`Number ${a} is divisble by 3`);
}

Number 12 is even
Number 12 is divisble by 3

var a = 12
if(a%2===0){
    console.log(`Number ${a} is even`);
}else if(a%3===0 || a%5===0){
    console.log(`Number ${a} is divisble by 3 or 5`);
}else{
    console.log(`Number ${a} is odd`);
}
Number 25 is divisble by 3 or 5




var a = 25
if(a%2===0){
    console.log(`Number ${a} is even`);
}else if(a%3===0 || a%5===0){
    if(a%3===0){
        console.log(`Number ${a} is divisble by 3`);
    }else{
        console.log(`Number ${a} is divisble by 5`);
    }
}else{
    console.log(`Number ${a} is odd`);
}
Number 25 is divisble by 3 or 5;


var a = 1
if(a){
    console.log("hii");
}else{
    console.log("bie");
}
"hii"

var a = 0
if(a){
    console.log("hii");
}else{
    console.log("bie");
}
"bie"

var a = true
if(a){
    console.log("hii");
}else{
    console.log("bie");
}
VM154:3 hii



var a = -1
if(a){
    console.log("hii");
}else{
    console.log("bie");
}
hii

//////////////////////////////////
Ternary operator
//////////////////////////
var a = 10
a>10 ? "Hii":"Bie"
"Bie"
var a = 10
a==10 ? "Hii":"Bie"
"Hii"

var a = 10
a>10 ? a+1:a-1

var a = 10
a>10 ? a+1:a-1
9
var a = 10
a==10 ? a+1:a-1
11

var a = 10
a==10?"hi":"bie"?a+1:a-1
"hi"
var a = 11
a==10?"hi":"bie"?a+1:a-1
12
var a = 10
a==10?"hi":"bie"?a+1:a-1
"hi"
var a = 11
a==10?"hi":"bie"?a+1:a-1
12


/////////////////////////////
truty = true, expect 0 either + or - ,1,2,3,,-1,-2,-3
falsy= false,0,null,undefined


