for
while
do while
for of
for in  >> of object
Map
filter


for(i=0;i<5;i++){
    console.log(i)
}
0
1
2
3
4

var city = ["Amsterdam", "Delhi", "Paris", "London", "Helsinki", "Haug", "Edinberg", "Dubai", "Nice"]

for(i=0;i<city.length;i++){
    console.log(`My city is ${city[i]}`)
}

Amsterdam
Delhi
VM66:4 Paris
VM66:4 London
VM66:4 Helsinki
VM66:4 Haug
VM66:4 Edinberg
VM66:4 Dubai
VM66:4 Nice

var city = ["Amsterdam", "Delhi", "Paris",[1,2,3], "London", "Helsinki", "Haug", "Edinberg", "Dubai", "Nice"]

for(i=0;i<city.length;i++){
    if(Array.isArray(city[i])){
        for(j=0;j<city[i].length;j++){
            console.log(city[i][j])
        }
    }else{
        console.log(city[i])
    }
}


////while/////
var i = 10;
while(i<5){
    console.log(i);
    i++
}



///dowhile
var i =10;
do{
    console.log(i)
    i++
}
while(i<5)
10


var city = ["Amsterdam", "Delhi", "Paris", "London", "Helsinki", "Haug", "Edinberg", "Dubai", "Nice"]

for(cities of city){
    console.log(cities)
}

var city = ["Amsterdam", "Delhi", "Paris",[1,2,3], "London", "Helsinki", "Haug", "Edinberg", "Dubai", "Nice"]

for(cities of city){
    if(Array.isArray(cities)){
        for(mycity of cities){
            console.log(mycity)
        }
    }else{
        console.log(cities)
    }
}