var a = [3,5,8,12,45,76,1]
a.map((data) => { return data*2})

a.map((data) => { console.log(data*2)})

map is use to loop over array 
> it always return same length of array as input array
> it  is use to apply the logic as sum, mul 

filter is user to filter out the value from array
> it may or may not return same length in output
> it only return those value for which output is true

var b = [20,35,34,45,26,28,21,19,29]
b.filter((data) => {return data>25})
[35, 34, 45, 26, 28, 29]

var b = [20,35,34,45,26,28,21,19,29]
b.map((data) => {return data>25})
[false, true, true, true, true, true, false, false, true]

var a = [0,1,2,3]
a.map((data) => { return data*2})
[0, 2, 4, 6]
a.filter((data) => { return data*2})
[1, 2, 3]