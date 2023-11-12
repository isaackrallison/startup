function login() {
    const nameEl = document.querySelector("#name");
    localStorage.setItem("userName", nameEl.value);
    window.location.href = "index.html";
  }
  
  function user() {
    data = localStorage.getItem("userName");
    console.log(data)
    document.getElementById("user").textContent = data;
    }

user();