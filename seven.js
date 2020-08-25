var name="Avenger";
var rating =4.5;
var type="action";
var ind="Hollywood";

//es5
var data = "The "+name+" is an "+type+" movie with rating as "+rating+" and from "+ind+"."
data
"The Avenger is an action movie with rating as 4.5 and from Hollywood."

//es6
var data =`The ${name} is an ${type} movie with rating as ${rating} and from ${ind}.`
data
"The Avenger is an action movie with rating as 4.5 and from Hollywood."