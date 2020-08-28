array is a collection of homogenious datatype

var a = ['aa','bb','ee','44']
var b = [34,66,37,8,23]
var c = [true,false,false,true]

array is a collection of homogenious & hetrogenious datatype

var a = ['aa',4,true,false,55,77,'ggg','dgd']

var city = ["Amsterdam","Delhi","London","Venice","Newyork"]
typeof(city)
"object"

city[0]
"Amsterdam"

city.length
5

city[city.length-1]
"Newyork"

city[5]
undefined

typeof(city[0])
"string"


var city = ["Amsterdam","Delhi","London","Venice","Newyork"]
city.push('Dubai')
6
city
(6) ["Amsterdam", "Delhi", "London", "Venice", "Newyork", "Dubai"]
city.push('Nice')
7
city
(7) ["Amsterdam", "Delhi", "London", "Venice", "Newyork", "Dubai", "Nice"]
city.pop()
"Nice"
city
(6) ["Amsterdam", "Delhi", "London", "Venice", "Newyork", "Dubai"]
city.pop()
"Dubai"
city
(5) ["Amsterdam", "Delhi", "London", "Venice", "Newyork"]

var city = ["Amsterdam", "Delhi", "London", "Venice", "Newyork", "Dubai", "Nice"]
city.pop(3)
"Nice"

(6) ["Amsterdam", "Delhi", "London", "Venice", "Newyork", "Dubai"]
city.pop(10000000)
"Dubai"


var city = ["Amsterdam", "Delhi", "London", "Venice", "Newyork", "Dubai", "Nice"]
undefined
city.unshift('Helsinki')
8
city
(8) ["Helsinki", "Amsterdam", "Delhi", "London", "Venice", "Newyork", "Dubai", "Nice"]0: "Helsinki"1: "Amsterdam"2: "Delhi"3: "London"4: "Venice"5: "Newyork"6: "Dubai"7: "Nice"length: 8__proto__: Array(0)
city.shift()
"Helsinki"
city
(7) ["Amsterdam", "Delhi", "London", "Venice", "Newyork", "Dubai", "Nice"]

push> always add in the end of the array
unshift > always add in the begining of the array
pop> remove always last value
shift> remove alaways firt value

