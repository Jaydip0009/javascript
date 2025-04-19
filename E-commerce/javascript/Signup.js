import allMethods from "../api/user.js";
import navbar from "../components/navbar.js";
import { getvalue } from "../utils/helpr.js";

document.getElementById("nav-bar").innerHTML = navbar();

const UserProfile = (e) => {
  e.preventDefault();
  let user = {
    name: getvalue("name"),
    email: getvalue("email"),
    password: getvalue("password"),
  };
  allMethods.create(user)
};

document.getElementById("user").addEventListener("submit", UserProfile);
