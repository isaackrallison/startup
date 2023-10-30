  
function user() {
    data = localStorage.getItem("userName");
    console.log(data)
    document.getElementById("user").textContent = data;
    }

user();