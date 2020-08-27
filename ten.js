Date()
"Thu Aug 27 2020 08:38:33 GMT+0530 (India Standard Time)"
var a = new Date()
undefined
a.getDate()
27
a.getDay()
4
a.getMonth()
7

sunday is 0
monday is 1


jan is 0
dec is 11

a.getFullYear()
2020


switch(new Date().getDay()){
    case 1:
        console.log("Today is monday");
        break;
    case 0:
        console.log('Today is sunday');
        break;
    case 4:
        console.log('Today is thrusday');
        break;
    default:
        console.log('i dont know you')
}