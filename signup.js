document.addEventListener("DOMContentLoaded", function() {
    // Retrieve the Register button element
    var registerButton = document.getElementById("registerButton");
    
    // Add a click event listener to the Register button
    registerButton.addEventListener("click", function() {
        // Retrieve form field values
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var password = document.getElementById("password").value;
        var confirmPassword = document.getElementById("cpass").value;
        
        // Check if any of the fields are empty
        if (!name || !email || !phone || !password || !confirmPassword) {
            if (password !== confirmPassword) {
                alert("Passwords do not match!");
                return; // Stop further execution
            }
            else{
                alert("Registration successfull.");
            }
            alert("Please enter all required details.");
            return; // Stop further execution
        }
        
        
        // Perform any additional validation
        // For example, check if passwords match
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return; // Stop further execution
        }
        else{
            alert("Registration successfull.");
        }
        
        // Now you have the form values, you can proceed with storing or processing them
        // For now, let's just log them
        console.log("Name: " + name);
        console.log("Email: " + email);
        console.log("Phone: " + phone);
        console.log("Password: " + password);
        console.log("Confirm Password: " + confirmPassword);
        
        // You can call a function here to store the data in your database
        // For example: storeUserData(name, email, phone, password);
    });
});
