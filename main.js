const user = document.querySelector("#user");
const password = document.querySelector("#password");
const btnlogin = document.querySelector("#btnlogin");
const API = "http://10.10.0.86:7070/api/v1/auth/login";
btnlogin.addEventListener("click", (e) => {
  e.preventDefault();
  fetch(API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: user.value,
      password: password.value,
    }),
  })
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        console.log(response);
        window.location.replace("./kirish/index.html");
      }

      return response.json();
    }) // Return the parsed JSON
    .then((data) => {
      console.log(data);
      sessionStorage.setItem("id", data.id);
    });
  user.value = "";
  password.value = "";
});
