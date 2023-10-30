const signInBtn = document.querySelector(".signin_btn");
const signUpBtn = document.querySelector(".signup_btn");
const formBox = document.querySelector(".form_box");
const body = document.body;

signInBtn.addEventListener("click", () => {
  formBox.classList.remove("active");
  body.classList.remove("active");
});

signUpBtn.addEventListener("click", () => {
  formBox.classList.add("active");
  body.classList.add("active");
});

let reg_btn = document.querySelector("#reg");
let gender = document.querySelector("input[name='gender']:checked").value;
let pass = document.querySelector("#password");
let conf_pass = document.querySelector("#confpass");
let err_msg = document.querySelector("#error_msg");
let login = document.querySelector("#login");
let phone = document.querySelector("#ph_num");
let smile = document.querySelector("#sml_login");

login.addEventListener("keydown", () => {
  if (login.value.length <= 1) {
    smile.innerHTML = "Login must be at least 3 letters";
    login.style.border = "2px solid red";
    smile.style.color = "red";
  } else if (login.value.length >= 1) {
    login.style.border = "2px solid green";
    smile.innerHTML = "";
  } else {
    smile.innerHTML = "";
    login.style.border = ""; // Reset the border to its original state
  }
});
// reg_btn.addEventListener("click", () => {
//   if (!(pass.value === conf_pass.value)) {
//     err_msg.innerHTML = "Password doesn't match";
//   } else {
//     err_msg.innerHTML = "";
//   }

//   console.log(login.value.length);
// });

console.log(login.value.length);
