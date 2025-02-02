let slideIndex = 0;
const slides = document.getElementsByClassName("mySlides");
const changeInterval = 4000; 

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) { 
        slideIndex = 1; 
    }
    slides[slideIndex - 1].style.display = "block";  
}

window.onload = function() {
    showSlides(); 
    setInterval(showSlides, changeInterval); 
};

function redirectTo(page) {
    if (page) {
        window.location.href = page; 
    } else {
        alert("Page not found!");
    }
}



function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
}

function validatePassword(password) {
    return password.length >= 6; 
}


function showError(message) {
    alert(message); 
}


document.getElementById("doctorLoginForm")?.addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!validateEmail(email)) {
        showError("Please enter a valid email.");
        return;
    }

    if (!validatePassword(password)) {
        showError("Password must be at least 6 characters long.");
        return;
    }

    alert("Login successful!");
});

document.getElementById("pharmacyLoginForm")?.addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!validateEmail(email)) {
        showError("Please enter a valid email.");
        return;
    }

    if (!validatePassword(password)) {
        showError("Password must be at least 6 characters long.");
        return;
    }

    alert("Login successful!");
});

document.getElementById("adminLoginForm")?.addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!validateEmail(email)) {
        showError("Please enter a valid email.");
        return;
    }

    if (!validatePassword(password)) {
        showError("Password must be at least 6 characters long.");
        return;
    }

    alert("Login successful!");
});


document.getElementById("accountRecoveryForm")?.addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;

    if (!validateEmail(email)) {
        showError("Please enter a valid email.");
        return;
    }

    alert("Password reset link sent to " + email);
});


document.getElementById("emailVerificationForm")?.addEventListener("submit", function(event) {
    event.preventDefault();
    const verificationCode = document.getElementById("verificationCode").value;

    if (verificationCode === "") {
        showError("Please enter the verification code.");
        return;
    }

    alert("Verification successful!");
});
