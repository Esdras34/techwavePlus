
document.getElementById("login-btn").addEventListener("click", function () {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    
    errorMessage.style.display = "none";
    errorMessage.textContent = "";

    
    if (!email || !password) {
        errorMessage.textContent = "Por favor, preencha todos os campos.";
        errorMessage.style.display = "block";
        return;
    }

    
    if (email === "esdras@fatec.com" && password === "victor123") {
        alert("Login bem-sucedido!");
    
        window.location.href = "index2.html";
    } else {
        errorMessage.textContent = "Email ou senha incorretos.";
        errorMessage.style.display = "block";
    }

     
    

});
