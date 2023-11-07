const SUCCES_COLOR = "green";
const ERROR_COLOR = "red";
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const modal = document.querySelector("#myModal");
const btn = document.querySelector("#reg");
const span = document.getElementsByClassName("close")[0];
const signInBtn = document.querySelector(".signin_btn");
const signUpBtn = document.querySelector(".signup_btn");
const formBox = document.querySelector(".form_box");
const user_info = document.querySelector("#user_info");
const body = document.body;
const user = {};

const border = (color) => {
  return `2px solid ${color}`;
};

signInBtn.addEventListener("click", () => {
  formBox.classList.remove("active");
  body.classList.remove("active");
});

signUpBtn.addEventListener("click", () => {
  formBox.classList.add("active");
  body.classList.add("active");
});

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
    user.login = login.value;
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
    user.phone = phone.value;
  }
});

// Email validation
let email = document.querySelector("#email");
let error_email = document.querySelector("#error_email");
email.addEventListener("input", () => {
  if (EMAIL_REGEX.test(email.value)) {
    email.style.border = border(SUCCES_COLOR);
    error_email.innerHTML = "";
    user.email = email.value;
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
    user.password = pass.value;
  } else {
    conf_pass.style.border = border(ERROR_COLOR);
    error_conf_pass.innerHTML = "Passwords mismatch";
    error_conf_pass.style.color = ERROR_COLOR;
  }
});

btn.addEventListener("click", () => {
  modal.style.display = "block";
  user.gender = document.querySelector("input[name='gender']:checked").value;;
  for (const key in user) {
    if (user.hasOwnProperty(key)) {
      const item = user[key];
      const li = document.createElement("li");
      li.innerHTML = `Your ${key} - ${item}`;
      user_info.appendChild(li);
    }
  }
});

span.addEventListener("click", () => {
  modal.style.display = "none";
});
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
