var city = "amstErdaM"
undefined
city.toUpperCase()
"AMSTERDAM"
city.toLowerCase()
"amsterdam"

"Amsterdam"

var city = "amstErdaM"
undefined
city[0]
"a"
city[1]
"m"
city.length
9
var city = "    London  "
undefined
city.length
12

var city = "    London  "
city.trim()

var city = "    London  "
city.trim()
"London"
var city = "    London .  "
city.trim()
"London ."


var email = "Ahanda205"
var emailid = "ahanda205"
undefined
email == emailid
false
email.toUpperCase() == emailid.toUpperCase()
true

var email = "Ahanda205"
undefined
email.charAt(0)
"A"
email[0]
"A"

var email = "Ahanda205"
undefined
email.slice(1)
"handa205"
email.slice(2)
"anda205"
email.slice(1,3)
"ha"
email.slice(1,4)
"han"

var email = "Ahanda205"
undefined
email.slice(1)
"handa205"
email.slice(2)
"anda205"
email.slice(1,3)
"ha"
email.slice(1,4)
"han"
email.slice(-1,4)
""
email.slice(1,-4)
"hand"
email.slice(-4)
"a205"

var city = "amstErdaM"
undefined
city.charAt(0).toUpperCase()
"A"
city.slice(1).toLowerCase()
"msterdam"
city.charAt(0).toUpperCase()+city.slice(1).toLowerCase()
"Amsterdam"

var mydata = "Welcome to JavaScript"
undefined
mydata.replace('JavaScript','JS')
"Welcome to JS"
var mydata = "JavaScript Welcome to JavaScript"
undefined
mydata.replace('JavaScript','JS')
"JS Welcome to JavaScript"

//to replace globally
mydata.replace(/JavaScript/g,'JS')
"JS Welcome to JS"

var city = "    London .  "
city.replace(/ /g,'')
"London."


slice(start,end?)
substring(start,end?)
substr(start,length?)
/////////////////////
var city = "Amsterdam"
undefined
city.slice(1)
"msterdam"
city.slice(2)
"sterdam"
city.slice(2,5)
"ste"
city.substring(1)
"msterdam"
city.substring(2)
"sterdam"
city.substring(2,5)
"ste"

city.substr(1)
"msterdam"
city.substr(2)
"sterdam"
city.substr(2,5)
"sterd"


/////////////////////////////////
var city = "Amsterdam"
undefined
city.slice(-1)
"m"
city.substring(-1)
"Amsterdam"

city.slice(-1,-3)
""
city.substring(-1,-3)
""

city.slice(-1,3)
""
city.substring(-1,3)
"Ams"
city.substring(-2,5)
"Amste"

city.slice(1,-3)
"mster"
city.substring(1,-3)
"A"

city.slice(-3,-1)
"da"
city.slice(-5,-1)
"erda"
city.slice(-1,-5)
""

var city = "Amsterdam"
undefined
city.substr(-1)
"m"
city.substr(-1,-3)
""
city.substr(-3,-1)
""
city.substr(-3,1)
"d"
city.substr(-3,6)
"dam"
city.substr(-5,6)
"erdam"
city.substr(-5,4)
"erda"

var a = " i am doing jS"
undefined
a.slice(1)
"i am doing jS"
a.slice(2)
" am doing jS"
var a = 847869748

var a = 847869748
undefined
a.toString()
"847869748"
""+a
"847869748"
a.toString().slice(1)
"47869748"
a.toString().slice(1).toLowerCase()
"47869748"
var b = a.toString()
undefined
var c = b.slice(1)