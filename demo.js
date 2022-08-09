
const fs=require('fs')
const input=require("readline-sync")
const axios=require("axios")

// sign_up = async () => {
    // let info={
            // email:input.question("Enter the email id of user: "),
            // password:input.question("Enter the password: "),
            // user_name:input.question("enter the user name: ")
        // }    
    // if ((info.email).includes("@") && (info.email).includes("gmail.com") || (".org"))  {
        // if ((info.password).length>=8 && (info.password).includes("@") || ("#") || ("$") || ("&") || ("!") || ("%")) {
            // let data=await axios.post("http://localhost:3000/posts",info)
            // console.log("YOUR ACCOUNT CREATE SUCCESSFULLY.......");
        // }
        // else {
            // console.log("INVALID PASSWORD..TRY AGAIN !!!!!!")
        // }
    // }
    // else {
        // console.log("INVALID EMAIL..TRY AGAIN !!!!!")
    // }
// }
// 
// log_in= async () => {
    // try {
        // email=input.question("Enter your email: ")
        // password=input.question("Enter your password: ")
        // let result=await axios.get(`http://localhost:3000/posts?email=${email}`)
        // if (result.data[0].password==password) {
            // console.log("YOU Log_in SUCCESSFULLY...")
            // console.log(result.data[0])
        // }
        // else {
            // console.log("PASSWROD WRONG...TRY AGAIN !!!!!!!!")
        // }
        // 
        // }catch{
        // console.log("INVALID EMAIL..TRY AGAIN !!!!")
        // }
// }

// Change_password=async () => {
    // try {
        // email=input.question("Enter your email:")
        // let result=await axios.get(`http://localhost:3000/posts?email=${email}`)
        // let pass=input.question("Enter the new password: ")
        // let confirm=input.question("Enter the password again for confirmation: ")
        // if ((confirm.length>=8) && (confirm.includes("@") || ("#") || ("$") || ("&") || ("!") || ("%")))  {
            // if (pass==confirm) {
                // result.data[0].password=confirm
                // console.log(result.data[0].id)
                // await axios.delete((`http://localhost:3000/posts/${result.data[0].id}`))
                // await axios.post("http://localhost:3000/posts",result.data[0])
                // console.log("successful")
            // }
            // else {
                // console.log("PASSWORD DOES NOT CONFIRM...TRY AGAIN !!!!!!")
            // }
        // }
        // else {
            // console.log("INVALID PASSWORD...TRY AGAIN !!!!!!!")
        // }
    // }
    // catch {
        // console.log("EMAIL DOES NOT EXISTS...TRY AGAIN")  
    //  }
// }

// 
// 
// 
// async function opearation() {
    // console.log("ENTER THE NUMBER WHICH OPERATION YOU HAVE TO DOING....\n 1.Sign_up \n 2.Log_in \n 3.Change password \n 4.Exist")
    // let number=input.question('Press what you want...')
    // if (number==1) {
        // sign_up()
    // }
    // else if (number==2) {
    //    log_in()
    // }
    // else if (number==3) {
        // Change_password()
    // }
    // else if (number==4) {
        // console.log("EXISTS SUCCESSFULLY...")
// 
    // }
// }
// opearation()

