import get from "./getElement.js";
import getUser from "./fetchUser.js";
import displayUser from "./displayUser.js";

const btn = get(".btn");

const showUser = async () => {
  //   // get user from api
  // // without the async above  getUser().then((data) => console.log(data));

  const person = await getUser();
  displayUser(person);
  // display user
};

window.addEventListener("DOMContentLoaded", showUser);
btn.addEventListener("click", showUser);
