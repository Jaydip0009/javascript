const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordRegex = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;

const UserData = JSON.parse(localStorage.getItem("UserData")) || [];

console.log(UserData);

const handleSubmit = (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const user = {
    username,
    email,
    password,

  };

  UserData.push(user);
  localStorage.setItem("UserData", JSON.stringify(UserData));
};

const changeColor = (id, valid = false) => {
  if (valid) {
    document.getElementById(id).style.border = "2px solid green";
    document.getElementById(id).style.outlineColor = "green";
  } else {
    document.getElementById(id).style.border = "2px solid red";
    document.getElementById(id).style.outlineColor = "red";
  }
};

const checkValidInputField = (e) => {
  const id = e.target.id;
  const value = document.getElementById(id).value;

  if (id == "username") {
    changeColor(id, value.length > 0);
  }

  if (id == "email") {
    changeColor(id, emailRegex.test(value));
  }

  if (id == "password") {
    changeColor("password", passwordRegex.test(value));
  }
};

const UI = (data) => {
  data.map(({ username, email, password }) => {
    const h1 = document.createElement("h1");
    h1.innerHTML = username;

    document.getElementById("display").append(h1);
  });
};

document.getElementById("form").addEventListener("submit", handleSubmit);
document.querySelectorAll("#form input").forEach((inputTag) => {
  inputTag.addEventListener("input", checkValidInputField);
});

UI(UserData);