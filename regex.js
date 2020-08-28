RegExp
Regular Expression 

^$

^([a-z])$

var a = "h"
a.match("^([a-z])$")
["h", "h", index: 0, input: "h", groups: undefined]

var a = "hi"
a.match("^([a-z]+)$")

+ > any length
{2} > exact 2 letters
{2,7} > min 2 & max 7

var data = "hi"
data.match("^([a-zA-H]+)$")

var a = "0Akkn89knii"
a.match("^([a-zA-Z0-9$%#]+)$")


var data = "A01Hm"
data.match("^([0-9]+)([a-zA-Z]+)$")
null

var data = "01Hm"


////////////////////////////////
var email =  "a@a.com"
email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")
(4) ["a@a.com", "a", "a", "com", index: 0, input: "a@a.com", groups: undefined]
var email =  "@a.com"
email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")
null
var email =  "@a"
email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")
null
var email =  "a@a.aakash"
email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")
null
var email =  "a@a.com"
email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")
(4) ["a@a.com", "a", "a", "com", index: 0, input: "a@a.com", groups: undefined]


var phone = 8978979857
phone.toString().match("^([0-9]{10})$")