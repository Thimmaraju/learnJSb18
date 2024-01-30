
// // function add(a,b){

// //     console.log(a+b)
// // }

// // add(3,4)

// // class  classname{


// //     // Varibales 

// //     //Methods 

// // }


// class Demo{

//     constructor(value1 , value2 ){

//         console.log("THis is a constructor method")

//         console.log(value1*value2)
//     }


//     x = 10

//     y =-20

//     add(a, b){

//         console.log(a+b)
//     }

//     printmessage(){

//         console.log("Sample text")
//     }
// }


// const  dm1 = new Demo(3,5)

// // console.log(dm1.x) // 10

// // dm1.printmessage()

// // dm1.add(4,8)


// const raju = new Demo(4,7)

// // raju.printmessage()


class student{

   static a= "Raju"
         b = "Manoj"

    method1(){

        console.log("this is non static method")
    }

    static method2(){

        console.log("this is static method")

    }
     

}

const obj1 = new student()


const obj2 = new student()

obj1.method1()

obj2.method1()

student.method2()

// OPPS 

// 1. Encapsulation

// 2. inheritance 

// 3. polymorphism

//4. prototype 

