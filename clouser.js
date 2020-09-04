//>>>>>Enclose something

/*
var a = 10
function add(){
    var b = 20
    return a+b
}

console.log("Add>>>",add());
console.log("A>>>>",a)
console.log("B>>>>",b)



var a = 10
for(i=0;i<10;i++){
    let b = 20
    console.log(a+b+i)
}

console.log("A>>>>",a)
console.log("B>>>>",b)

////////*/
var out = []

for(let i=0;i<=3;i++){
    out[i]=function(){
        return " i am with "+i
    }
}

for(j=0;j<out.length;j++){
    console.log(out[j]())
}