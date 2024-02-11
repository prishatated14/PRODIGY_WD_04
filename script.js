function displayGreeting() {
    alert("Welcome to Prisha Tated's Portfolio!");
}


function handleSubmit(event) {
    event.preventDefault(); 
    
    
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    
    
    if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields.");
        return;
    }
    
    
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }
    
    
    alert("Name: " + name + "\nEmail: " + email + "\nMessage: " + message);
}


function scrollToTarget(targetId) {
    var targetElement = document.getElementById(targetId);
    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}


document.addEventListener("DOMContentLoaded", function() {
    
    displayGreeting();
    
    
    document.getElementById("contactForm").addEventListener("submit", handleSubmit);
    
    
    var navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(function(navLink) {
        navLink.addEventListener("click", function(event) {
            event.preventDefault(); 7
            
            
            var targetId = this.getAttribute("href").substring(1);
            
            
            scrollToTarget(targetId);
        });
    });
});

