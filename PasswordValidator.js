
var password = prompt("Enter your password:");
var confirmPassword = prompt("Confirm your password:");

// Check if the passwords match
if (password === confirmPassword) {
  console.log("Password Matched. Password validation Successful.");
} else {
  console.log("Password didn't match. Password validation unsuccessful");
}
