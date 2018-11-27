/* eslint-disable eqeqeq */
const signUp = document.getElementById("submit");
signUp.addEventListener("click", () => {
  const username = document.getElementById("username").value;
  const email = document.getElementById("emailId").value;
  const password = document.getElementById("mypassword").value;
  const errorMessageOne = document.getElementById("usererror");
  const errorMessageTwo = document.getElementById("emailerror");
  const errorMessageThree = document.getElementById("passworderror");
  const input = document.querySelectorAll(".groupfields input");
  if (username.length == " " && email.length == " " && password.length == " ") {
    errorMessageOne.innerHTML = "Username field cannot be left blank.";
    errorMessageTwo.innerHTML = "Email  field cannot be left blank.";
    errorMessageThree.innerHTML = "Password field cannot be left blank.";
    for (let i = 0; i < input.length; i += 1) {
      input[i].style.border = "2px solid red";
    }
    return false;
  }
  if (username.length == "") {
    errorMessageOne.innerHTML = "Username field cannot be left blank.";
    input[0].style.border = "2px solid red";
    return false;
  }
  if (email.length == "") {
    errorMessageTwo.innerHTML = "Email field cannot be left blank.";
    input[1].style.border = "2px solid red";
    return false;
  }
  if (password.length == "") {
    errorMessageThree.innerHTML = "Password field cannot be left blank.";
    input[2].style.border = "2px solid red";
    return false;
  }
  if (password.length < 6) {
    errorMessageThree.innerHTML = "Password must be at least 6 characters long.";
    input[2].style.border = "2px solid red";
    return false;
  }
  return true;
});
// Show Password
const checkbox = document.getElementById("check");
checkbox.addEventListener("click", () => {
  const checkPassword = document.getElementById("mypassword");
  if (checkPassword.type === "password") {
    checkPassword.type = "text";
  } else {
    checkPassword.type = "password";
  }
});
