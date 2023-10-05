document.getElementById("login-form").addEventListener("submit", async (e) => {
    e.preventDefault();
console.log("Are you working?")
    const form = new FormData(e.target);

    const options = {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: form.get("username"),
            password: form.get("password")
        })
    }

    console.log(options)
    const response = await fetch("http://localhost:3000/users/login", options);
    
    const data = await response.json();
    if (response.status == 200) {
        localStorage.setItem("token", data.token)
        window.location.assign("board.html")
    } else {
        alert(data.error);
    }
})