function validateSignUpForm() {
    // Clear any previous error messages
    clearErrors();

    var valid = true;

    var name = document.getElementById('farmer-name').value;
    var phone = document.getElementById('phone').value;
    var landArea = document.getElementById('land-area').value;
    var crops = document.getElementById('crops').value;
    var soilType = document.getElementById('soil-type').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;

    // Validate name
    if (name === "") {
        displayError('error-name', 'Please enter your name');
        valid = false;
    }

    // Validate phone number
    if (phone === "" || !/^\d{10}$/.test(phone)) {
        displayError('error-phone', 'Please enter a valid 10-digit phone number');
        valid = false;
    }

    // Validate land area
    if (landArea === "" || landArea <= 0) {
        displayError('error-land-area', 'Please enter a valid land area');
        valid = false;
    }

    // Validate crops
    if (crops === "") {
        displayError('error-crops', 'Please enter the crops you have grown');
        valid = false;
    }

    // Validate soil type
    if (soilType === "") {
        displayError('error-soil-type', 'Please enter the type of soil');
        valid = false;
    }

    // Validate passwords
    if (password === "") {
        displayError('error-password', 'Please enter a password');
        valid = false;
    } else if (password !== confirmPassword) {
        displayError('error-confirm-password', 'Passwords do not match');
        valid = false;
    }

    // Validate farming type
    if (!document.getElementById('organic').checked && !document.getElementById('modern').checked) {
        displayError('error-farming-type', 'Please select a preferred farming type');
        valid = false;
    }

    return valid;
}

function displayError(elementId, message) {
    document.getElementById(elementId).style.display = 'block';
    document.getElementById(elementId).innerHTML = message;
}

function clearErrors() {
    var errorElements = document.getElementsByClassName('error');
    for (var i = 0; i < errorElements.length; i++) {
        errorElements[i].style.display = 'none';
        errorElements[i].innerHTML = '';
    }
}
