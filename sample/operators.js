var x = 11

var y =3

//+, -, *, /, %, ++,--
console.log(x%y)

y++

y =y+1

x--

x=x-1

console.log(y)

console.log(x)

//comparision operators 
//true or false

//  >
//  <
//  >=
//  <=
// !=
//  ==
//  ===

num1 = 10

num2 = "10"

console.log(num1==num2)

// == compare only values but not datatypes 

//=== compare not only values but also datatypes 

//What coersionn in Javascript 

num3 = 10

num4 = "20"

console.log(num3+num4)

console.log(5+4+"10")

console.log("1"+20+30) 

console.log(20-"10")


console.log(5!=5)

// Logical operators

// AND 

//   1  1  1
//   1  0  0
//   0  1  0
//   0  0  0


 //&&

 // OR 

//   1  1  1
//   1  0  1
//   0  1  1
//   0  0  0

//||

// NOT 

//  1  0

//  0  1

//    !


console.log((2>3)&& (4>5))


console.log((10==="10")|| (4>6))

console.log(!("10"===10))

// Assignment operators 
// =
// +=
// -=
// *=
// /=
// %=


// x =30

// x += 5

// x = x+5

// x = x+30

// console.log(x)

//Ternnary operator 

//<condition> ? <value1> : <value2>;

st1 = "Nagesh"

st2 = "Ganesh"

//Condition  



st3 = 10==="10"?st1 : st2


console.log(st3)

// isbillable = true

// {

//    Status  = Sold

// }

// productstatus =  isbillable? Sold: Inprogress

// expect(productstatus).to.equal("Sold")


price1 = Number("120")

price2 = Number("60")


total = price1 +price2 

console.log(total)

total = 180

tottalprice = "180"

expect(total).to.equal(tottalprice)