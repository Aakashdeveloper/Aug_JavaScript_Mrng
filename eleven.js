for multiple condition multiple output we will use "if else"
for one condition mutiple output we will use "switch"
for only one condition use "ternary" 

var name = "John"

switch(name){
    case 'Aakash':
        console.log("You are user");
        break;
    case 'John':
        console.log('You are admin');
        break;
    case 'Eva':
        console.log('You are Super admin');
        break;
    default:
        console.log('i dont know you')
}

'You are admin'


var a = 10
switch(a%2){
    case 0:
        console.log('Number is even');
        break;
    case 1:
        console.log('Number is odd');
        break;
    default:
        console.log('I Dont know')
}