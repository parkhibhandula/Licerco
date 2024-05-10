// Ensure the JavaScript executes after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Retrieve the Register button element
    var registerButton = document.getElementById("registerButton");
    var name1,email,password,phone,cpass;
    // Add a click event listener to the Register button
    registerButton.addEventListener("click", function() {
        // Retrieve form field values
        name1 = document.getElementById("name").value;
        email = document.getElementById("email").value;
        phone = document.getElementById("phone").value;
        password = document.getElementById("password").value;
        cpass = document.getElementById("cpass").value;

        // Display form field values for testing
        console.log("Name: " + name1);
        console.log("Email: " + email);
        console.log("Phone: " + phone);
        console.log("Password: " + password);
        console.log("Confirm Password: " + cpass);
        if(password !== cpass){
            alert("Please enter the correct password.");
        }
        // Add your form submission logic here
    });
});
function login() {
    // Retrieve email and password values
    var email1 = document.getElementById("email").value;
    var password1 = document.getElementById("password").value;

    // For testing purposes, log the retrieved values
    console.log("Email: " + email1);
    console.log("Password: " + password1);
    // Add your login logic here
    if(email1===email){
        if(password1===password){
            alert("You can access now.")
        }
        else{
            alert("Wrong password");
        }
    }
    else{
        alert("wrong email");
    }
}

