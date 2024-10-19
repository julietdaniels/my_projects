//alert("hello world")
// console.log("welcome")

//var x = 60;
//console.log(x);

//var y2 = 50;
//console.log(y2)
//console.log(y2)

//var x_ = 30;
//console.log(x_)
//console.log(x_)
//console.log(x_)

//var person = "favour"
//console.log("favour")

//var jet20 = "juliet"
//console.log("juliet")


//var is_typing = true
//ar human = person
//console.log(person)//

//var num1 = 780
//var num2 = 550

//if (num1 > num2){
// console.log (num1+"is greater than num2")
//}//else {
//console.log (num2+"is lesser than num1")
//}//

// var message = "Transfers"
// var blocked = "No"

// if (message == "Hi" || blocked == "No") {
//     console.log("How can i help You?")
// } else if (message == "Tranfers") {
//     console.log("choose bank:")
// } else if (message == "Uba") {
//     console.log("You have selected uba:")
// } else if (message == "Wema") {
//     console.laog("wema:")
// } else {
//     console.log("i don't understand!")
// }


// var username = "mary"
// var password = "0000"

// //if(username == "john123" && password == "1234"){
// console.log("you are logged in")
// }else {
//     console.log("invalid username or password")
// }//

//if(){
// if () {

// } else {

// }
// }//




// // for (let i = 0; i < 5; i++) {
// //     console.log("Iteration number: " + i);

// // }

// // for (let i = 0; i < 10; i+2) {
// //     console.log("Iteration number: " + i);

// // }



// for (let i = 0; i < 10; i++) {
//     if ( i === 5 ) {
//         break;
//     }
//     console.log (i);
// }

// for (let i = 0; i < 5; i++) {
//     if ( i === 3 ) {
//         continue;
//     }
//     console.log (i);
// }

// function validateEmail(email) {
//     // Check for empty email
//     if (email === '') {
//       return false;
//     }

//     // Split the email into parts using the '@' character
//     const emailParts = email.split('@');

//     // Validate the local part (before the '@')
//     const localPart = emailParts[0];
//     if (localPart.length < 1 || localPart.length > 64) {
//       return false; // Local part length must be between 1 and 64 characters
//     }
//     if (!/^[a-zA-Z0-9._-]+/.test(localPart)) {
//       return false; // Local part must start with a letter, number, or underscore
//     }

//     // Validate the domain part (after the '@')
//     const domainPart = emailParts[1];
//     if (domainPart.length < 1 || domainPart.length > 255) {
//       return false; // Domain part length must be between 1 and 255 characters
//     }
//     if (!/^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(domainPart)) {
//       return false; // Domain part must contain at least one dot and end with at least two letters
//     }

//     // Check for invalid characters
//     if (email.includes(' ')) {
//       return false; // Email cannot contain spaces
//     }

//     // Return true if all validations pass
//     return true;
//   }

 const email = "oloyejuliet@gmail.com"

let emailValidate = (email) => {
    // check email split
    let emailSplit = email.split("@");
    let emailInclude = email.includes("@")
    let emailLength = email.length

    if (emailSplit.length < 2) {
        console.log("invalid email ----@")
    }else if(emailinclude = "false"){
        console.log("invalid email-----does not include @")
    }else if(emailLength < 5){
        console.log("invalid email-----less than 5 char")
    }else{
        console.log("Email validated successfully")
    }

    console.log(emailInclude)

}
emailValidate(email)

// User have a wallet to check data

// let userData = {
//     name: "victory",
//     gender: "if",
//     wallet: 10000,
//     canWithdraw: true,
//     age: 19
// }

// function to allow withdrawal
// let withdrawMoney = (user, amount) => {
//     // check for age
//     if(userData.age < 18){
//         console.log("You are under age")
//     }else if(userData.canWithdraw = false){
//         console.log("you don't have access")
//     }else if(user.wallet < amount){
//         console.log("Low wallet balance")
//     }else{
//         console.log("you can withdraw")
//     let newUserData = {
//             ...UserData,
//             wallet:userData.wallet - amount

//         }
//         console.log(newUserData)
//         // console.log("Amount withdrwan, your new data is ${newUserData}")
//     }

// }
// withdrawMoney(userData)


// let student=[
//     {name:"peter",age:11,gender:"M",wallet:100},
//     {name:"paul",age:31,gender:"M",wallet:15000},
//     {name:"favy",age:20,gender:"f",wallet:20000},
//     {name:"john",age:16,gender:"M",wallet:300},
//     {name:"mercy",age:16,gender:"f",wallet:200},

// ]

// let studentBonus = (student,bonus) =>{
//     student.map(element=>{
//         console.log(`${element.name}is ${element.age} years old and has a new wallet ${element.gender}`)
//     })
// }
// studentBonus(student,27000)

// login stimulation 

// let student=[
//         {password:"peter22",username:peter,age:11,gender:"M",wallet:100},
//         {password:"paul34",username:paul,age:31,gender:"M",wallet:15000},
//         {password:"favy99",username:favy,age:20,gender:"f",wallet:20000},
//         {password:"john34",username:john,age:31,gender:"M",wallet:15000},
//         {password:"mercy99",username:mercy,age:20,gender:"f",wallet:20000},
//     ]

//     let userToLogin = {
//         username:"wfgsd",
//         password:"sdfgd"
//     }
// function logInUser(db,user){
//     // validate data
//     if (user.username.length < 3) {
//         console.log("enter valid username")
//     }else if(user.password < 1){
//         console.log("enter valid password")
//     } else{
//         console.log("user logged in successfully", filter[0])
//     }
    
// } logInUser(stdudentDB,userTologin)

// assignment 

const user = {
    username: "johndoe23",
    age: 28,
    gender: "male"
  };
  
  createUser("johndoe23");

function createUser(johndoe23) {
  users.push();
  return "User signed up successfully!";
}

const response = createUser("johndoe23");
console.log("johndoe23 signed in successfully");