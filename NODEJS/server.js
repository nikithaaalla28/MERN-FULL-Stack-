const {display, test, name,  }= require("./model");
console.log("This is server.js File");
display();
const testResult=test()
console.log(testResult);
console.log(name);



console.log("-------------------------------");

const { displayUsers, postUsers, deleteUser, displayUsersBasedEmail}=require ("./store/UserStorage");
console.log("before post users:", displayUsers());

postUsers({name:"ravi", email:"ravi@gmail.com"});
postUsers({name:"sai", email:"sai@gmail.com"});
postUsers({name:"raju", email:"raju@gmail.com"});

console.log("after post users:", displayUsers());

deleteUser("sai");
console.log("after delete User", displayUsers());


console.log("Email: ravi@gmail.com", displayUsersBasedEmail('ravi@gmail.com'));