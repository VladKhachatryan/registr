const SUCCES_COLOR = "green";
const ERROR_COLOR = "red";
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const border = (color) => {
  return `2px solid ${color}`;
};

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

// Login validation
let login = document.querySelector("#login");
let smile = document.querySelector("#error_login");
login.addEventListener("input", () => {
  if (login.value.length < 3) {
    smile.innerHTML = "Login must be at least 3 characters";
    login.style.border = border(ERROR_COLOR);
    smile.style.color = "red";
  } else {
    login.style.border = border(SUCCES_COLOR);
    smile.innerHTML = "";
  }
});

// Phone validation
let phone = document.querySelector("#ph_num");
let error_phone = document.querySelector("#error_phone");
phone.addEventListener("input", () => {
  if (phone.value.length < 6 || phone.value.length > 9) {
    phone.style.border = border(ERROR_COLOR);
    error_phone.innerHTML =
      "Phone Number must be at least 6 numbers and max length 9 numbers";
    error_phone.style.color = "red";
  } else {
    phone.style.border = border(SUCCES_COLOR);
    error_phone.innerHTML = "";
  }
});

// Email validation
let email = document.querySelector("#email");
let error_email = document.querySelector("#error_email");
email.addEventListener("input", () => {
  if (EMAIL_REGEX.test(email.value)) {
    email.style.border = border(SUCCES_COLOR);
    error_email.innerHTML = "";
  } else {
    email.style.border = border(ERROR_COLOR);
    error_email.innerHTML = "The Email isn`t correct";
    error_email.style.color = ERROR_COLOR;
  }
});

// Password validation
let pass = document.querySelector("#password");
let error_pass = document.querySelector("#error_pass");
pass.addEventListener("input", () => {
  if (pass.value.length < 6 || pass.value.length > 12) {
    pass.style.border = border(ERROR_COLOR);
    error_pass.innerHTML = "The Password is not correct";
    error_pass.style.color = ERROR_COLOR;
  } else {
    pass.style.border = border(SUCCES_COLOR);
    error_pass.innerHTML = "";
  }
});

// Confirm password
let conf_pass = document.querySelector("#confpass");
let error_conf_pass = document.querySelector("#error_conf_pass");
conf_pass.addEventListener("input", () => {
  if (conf_pass.value === pass.value) {
    conf_pass.style.border = border(SUCCES_COLOR);
    error_conf_pass.innerHTML = "";
  } else {
    conf_pass.style.border = border(ERROR_COLOR);
    error_conf_pass.innerHTML = "Passwords mismatch";
    error_conf_pass.style.color = ERROR_COLOR;
  }
});





let err_msg = document.querySelector("#error_msg");
// reg_btn.addEventListener("click", () => {
//   if (!(pass.value === conf_pass.value)) {
//     err_msg.innerHTML = "Password doesn't match";
//   } else {
//     err_msg.innerHTML = "";
//   }

//   console.log(login.value.length);
// });

console.log(gender);
