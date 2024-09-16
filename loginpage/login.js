function validateForm() {
    // Clear any previous error messages
    document.getElementById('error-email-phone').style.display = 'none';
    document.getElementById('error-password').style.display = 'none';

    var emailPhone = document.getElementById('email-phone').value;
    var password = document.getElementById('password').value;
    var valid = true;

    // Validate email/phone field
    if (emailPhone === "") {
        document.getElementById('error-email-phone').style.display = 'block';
        document.getElementById('error-email-phone').innerHTML = 'Please enter your email or phone.';
        valid = false;
    }

    // Validate password field
    if (password === "") {
        document.getElementById('error-password').style.display = 'block';
        document.getElementById('error-password').innerHTML = 'Please enter your password.';
        valid = false;
    }

    // If both fields are valid, allow the form to submit
    return valid;
}
