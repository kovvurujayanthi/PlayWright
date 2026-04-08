// Basic function 
// function greet() {
//   console.log("Hello QA Engineer");
// }

// greet(); // calling function

// Reusable login validation

// function login(username, password) {
//   if (username === "admin" && password === "1234") {
//     console.log("Login Successful");
//   } else {
//     console.log("Login Failed");
//   }
// }


// login("admin", "1234");
// login("admin", "wrong");

// Validating page title

// function validateTitle(actual, expected) {
//   if (actual === expected) {
//     console.log("Title is correct");
//   } else {
//     console.log("Title mismatch");
//   }
// }

// validateTitle("Google", "Google");

// API status check

// function checkStatus(statusCode) {
//   if (statusCode === 200) {
//     console.log("API Success");
//   } else {
//     console.log("API Failed");
//   }
// }

// checkStatus(200);
// checkStatus(500);

function checkAccess(role) {
  if (role === "admin") {
    return "Full Access";
  } else if (role === "user") {
    return "Limited Access";
  } else {
    return "No Access";
  }
}

console.log(checkAccess("admin"));

function validateForm(username, password) {
  if (username === "" || password === "") {
    console.log("❌ Fields cannot be empty");
  } else {
    console.log("✅ Form is valid");
  }
}

validateForm("", "1234");

function calculate(a, b) {
  return a + b;
}

let result = calculate(5, 10);
console.log("Result:", result);
