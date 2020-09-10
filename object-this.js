/*var firstname = "Michal"
var lastname = "Peter"

var sayHi ={
    firstname:'Zoe',
    lastname:'Lisa',
    greet:function(){
        return `Say hi to ${firstname} ${lastname}`
    }
}

console.log(sayHi.greet())
Say hi to Michal Peter*/

var firstname = "Michal"
var lastname = "Peter"

var sayHi ={
    firstname:'Zoe',
    lastname:'Lisa',
    greet:function(){
        return `Say hi to ${this.firstname} ${this.lastname}`
    }
}


console.log(sayHi.greet())
Say hi to Zoe Lisa

/////////////////////////////
constructor
//////////////////////
var bob = new Object();
bob.age = 10
bob.city = "NewYork"
bob.setAge=function(newAge){
    this.age=newAge
}

var tony = new Object();
tony.age = 10
tony.city = "NewYork"
tony.setAge=function(newAge){
    this.age=newAge
}

var createAge = function(newAge){
    this.age = newAge
}

var bob = new Object();
bob.age = 10
bob.city = "NewYork"
bob.setAge=createAge;

var tony = new Object();
tony.age = 10
tony.city = "NewYork"
tony.setAge=createAge;