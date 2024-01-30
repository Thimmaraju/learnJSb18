
const student = {

    stuname : "Nagesh",
    place : "Blr",
    coursename: "Cypress",
    age : 26,
   
}

console.log(student.coursename)

console.log(student['stuname'])

console.log(student.lastname)

student['lastname'] = "K"

console.log(student.lastname)

student['coursename'] = "Playwright"

console.log(student.coursename)

delete student['coursename']

console.log(student.coursename)


menuitems = {


    menu1: "Admin",
    menu2: "PIM",
    menu3: "Leave",
    menu4: "Time",
    menu5: "Recruitment",
    menu6: "My Info",
    menu7: "Performance",
}

//es6 for in

for (let i in menuitems){

    console.log("start loop")

    console.log(menuitems[i])
    console.log("end loop")
}


cy .contains('Admin').should("be.visible")
cy .contains('PIM').should("be.visible")