function validateForm() {
    let valid = true;

    // Clear errors
    document.querySelectorAll(".error").forEach(e => e.innerHTML = "");

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let age = document.getElementById("age").value;
    let dob = document.getElementById("dob").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let mobile = document.getElementById("mobile").value.trim();
    let address = document.getElementById("address").value.trim();
    let city = document.getElementById("city").value.trim();
    let state = document.getElementById("state").value.trim();
    let pincode = document.getElementById("pincode").value.trim();
    let terms = document.getElementById("terms").checked;

    // Name
    if (name === "") {
        document.getElementById("nameError").innerHTML = "Name required";
        valid = false;
    }

    // Email
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerHTML = "Invalid email";
        valid = false;
    }

    // Age
    if (age < 18 || age > 60) {
        document.getElementById("ageError").innerHTML = "Age must be between 18 and 60";
        valid = false;
    }

    // DOB
    if (dob === "") {
        document.getElementById("dobError").innerHTML = "Select DOB";
        valid = false;
    }

    // Password
    if (password.length < 6) {
        document.getElementById("passwordError").innerHTML = "Min 6 characters";
        valid = false;
    }

    // Confirm password
    if (password !== confirmPassword) {
        document.getElementById("confirmPasswordError").innerHTML = "Passwords do not match";
        valid = false;
    }

    // Mobile
    if (!/^[0-9]{10}$/.test(mobile)) {
        document.getElementById("mobileError").innerHTML = "Enter 10 digit number";
        valid = false;
    }

    // Gender
    let genderSelected = document.querySelector('input[name="gender"]:checked');
    if (!genderSelected) {
        document.getElementById("genderError").innerHTML = "Select gender";
        valid = false;
    }

    // Address
    if (address.length < 10) {
        document.getElementById("addressError").innerHTML = "Enter full address";
        valid = false;
    }

    // City & State
    if (city === "") {
        document.getElementById("cityError").innerHTML = "City required";
        valid = false;
    }

    if (state === "") {
        document.getElementById("stateError").innerHTML = "State required";
        valid = false;
    }

    // Pincode
    if (!/^[0-9]{6}$/.test(pincode)) {
        document.getElementById("pincodeError").innerHTML = "Enter 6 digit pincode";
        valid = false;
    }

    // Hobbies
    let hobbies = document.querySelectorAll(".hobby:checked");
    if (hobbies.length === 0) {
        document.getElementById("hobbyError").innerHTML = "Select at least one hobby";
        valid = false;
    }

    // Terms
    if (!terms) {
        document.getElementById("termsError").innerHTML = "Accept terms";
        valid = false;
    }

    return valid;
}
