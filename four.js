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