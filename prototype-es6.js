class geo{
    constructor(lat,long){
        this.lat=43.44,
        this.long=70.11
    }
}

class language2 extends geo{
    constructor(name,country,lat,long){
        super(lat,long)
        this.name = name;
        this.country= country
    }

    greet=function(){
        return "sayhi"
    }

}

var English = new language2('French','France')