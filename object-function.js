function language(name,country){
    this.name= name;
    this.country=country;
    this.greet=function(){
        return "sayhi"
    }
}

var hindi = new language('Hindi','India')
hindi
language {name: "Hindi", country: "India"}

//es6
class language1{
    constructor(name,country){
        this.name = name;
        this.country= country
    }

    greet=function(){
        return "sayhi"
    }

}

var Englisg = new language('Englisg','UK')