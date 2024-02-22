const accountId = 13243;
let accountEmail = "test@gmail.com";
var accountPassword = "123456";
accountCity = "delhi";

// accountId = 2; //not allowed
accountEmail = "ajay@gmail.com"
accountPassword = "343"
accountCity = "Noida"

console.table([accountId,accountEmail,accountPassword,accountCity])
console.log(accountId)


// Prefer not to use var because of issue in block scope and functional scope