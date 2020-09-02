function
method
arrow function
IFFI
Generator
//////////////////////
var a = 10
var b = 20
a+b

//////function///////
function add(a,b){
    return a+b
}

add(1,2)
3
add(5,7)
12
add('a','b')
"ab"

function isEven(userInput){
    var out;
    if(userInput%2==0){
        out = `Number ${userInput} is even`
    }else{
        out = `Number ${userInput} is odd`
    }
    return out
}

isEven(4)
"Number 4 is even"
isEven(99)
"Number 99 is odd"
isEven('hh')
"Number hh is odd"

function add(a,b){
    return a,b
}

add(1,2)
2
add(6,9)
9
add(9)
undefined
add(9,8,0)
8


/////////////
method>>> when function is assign to variable
////////

var add = function(a,b){
    return a+b
}

add(1,2)

//////////
Es6 > arrow
/////////////////
var add = (a,b) => {return a+b}
add(1,2)




