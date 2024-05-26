const form = document.getElementById('loginForm'),
    mInput = document.getElementById('matricule'),
    pInput = document.getElementById('password'),
    forgotPasswordLink = document.getElementById('forgotPassword');

form.onsubmit = (e) => {
    e.preventDefault();

    if (mInput.value === "12345" && pInput.value === "12345") {
        window.location.href = form.getAttribute("action");
    } else {
        alert("Matricule ou mot de passe invalide");
    }
}

forgotPasswordLink.onclick = (e) => {
    e.preventDefault();
    alert("Contacter le service IT");
}
