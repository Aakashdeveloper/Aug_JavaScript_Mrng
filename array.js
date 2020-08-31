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
(8) ["Helsinki", "Amsterdam", "Delhi", "London", "Venice", "Newyork", "Dubai", "Nice"]
0: "Helsinki"1: "Amsterdam"2: "Delhi"3: "London"4: "Venice"5: "Newyork"6: "Dubai"7: "Nice"length: 8__proto__: Array(0)
city.shift()
"Helsinki"
city
(7) ["Amsterdam", "Delhi", "London", "Venice", "Newyork", "Dubai", "Nice"]

push> always add in the end of the array
unshift > always add in the begining of the array

pop> remove always last value
shift> remove alaways first value


var city = ["Helsinki", "Amsterdam", "Delhi", "London", "Venice", "Newyork", "Dubai", "Nice"]
city.slice(1)
(7) ["Amsterdam", "Delhi", "London", "Venice", "Newyork", "Dubai", "Nice"]
city.slice(2,5)
(3) ["Delhi", "London", "Venice"]

city.splice(start,deletecount,values)

var city=["Amsterdam", "Delhi", "London", "Venice", "Newyork", "Dubai", "Nice"]
undefined
city.splice(2,0,'Paris','Boston')
[]
city
(9) ["Amsterdam", "Delhi", "Paris", "Boston", "London", "Venice", "Newyork", "Dubai", "Nice"]0: "Amsterdam"1: "Delhi"2: "Paris"3: "Boston"4: "London"5: "Venice"6: "Newyork"7: "Dubai"8: "Nice"length: 9__proto__: Array(0)
city.splice(3,1)
["Boston"]
city
(8) ["Amsterdam", "Delhi", "Paris", "London", "Venice", "Newyork", "Dubai", "Nice"]
city.splice(4,2,'Helsinki','Haug','Edinberg')
(2) ["Venice", "Newyork"]
city
(9) ["Amsterdam", "Delhi", "Paris", "London", "Helsinki", "Haug", "Edinberg", "Dubai", "Nice"]


var a = ['a','b',3]
var b = [1,'c','d']
undefined
a+b
"a,b,31,c,d"
var c= [4,5,6]
undefined
a+b+c
"a,b,31,c,d4,5,6"
var a = ['a','b',3]
var b = [1,'c','d']
undefined
a.concat(b)
(6) ["a", "b", 3, 1, "c", "d"]
var c = [3,4,5]
undefined
a.concat(c,b)
(9) ["a", "b", 3, 3, 4, 5, 1, "c", "d"]

var url = "https://github.com/Aakashdeveloper/hotelApi"
url.split('/')
(5) ["https:", "", "github.com", "Aakashdeveloper", "hotelApi"]
var output = url.split('/')
undefined
output[output.length-1]
"hotelApi"
var a = "i am doing javascript"
undefined
a.split(' ')
(4) ["i", "am", "doing", "javascript"]
var b = "javascript"
undefined
b.split("")
(10) ["j", "a", "v", "a", "s", "c", "r", "i", "p", "t"]

var colors=["Red","Green","blue"]
var [a,b] = colors
a
"Red"
b
"Green"

var data = req.query.city
var {city} = req.query

var data=10
{data:data}
{data}

var myarr =  ["Delhi","Mumbai",["Paris","Nice",[1,2,3],"Helsinki",[3,4,5],"Dubai"],"Pune"]
undefined
myarr[0]
"Delhi"
myarr[3]
"Pune"
myarr.length
4
myarr[2]
(6) ["Paris", "Nice", Array(3), "Helsinki", Array(3), "Dubai"]
myarr[2][3]
"Helsinki"
myarr[2][2]
(3) [1, 2, 3]
myarr[2][2][0]
1
myarr[2][4]
(3) [3, 4, 5]
myarr[2][4][2]
5

var myarr =  ["Delhi","Mumbai",["Paris","Nice",[1,2,3],"Helsinki",[3,4,5],"Dubai"],"Pune"]
undefined
myarr.flat()
(9) ["Delhi", "Mumbai", "Paris", "Nice", Array(3), "Helsinki", Array(3), "Dubai", "Pune"]
myarr.flat(2)
(13) ["Delhi", "Mumbai", "Paris", "Nice", 1, 2, 3, "Helsinki", 3, 4, 5, "Dubai", "Pune"]

var city = ["Amsterdam", "Delhi", "Paris", "London", "Helsinki", "Haug", "Edinberg", "Dubai", "Nice"]
undefined
city.sort()
(9) ["Amsterdam", "Delhi", "Dubai", "Edinberg", "Haug", "Helsinki", "London", "Nice", "Paris"]
var city = ["Amsterdam", "Delhi", "Paris", "London", "Helsinki", "Haug", "Edinberg", "Dubai", "Nice"]
undefined
city.sort().reverse()
(9) ["Paris", "Nice", "London", "Helsinki", "Haug", "Edinberg", "Dubai", "Delhi", "Amsterdam"]