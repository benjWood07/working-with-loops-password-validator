const readlineSync = require('readline-sync');

let safePassword = false;

while (!safePassword) {
    const password = readlineSync.question('Hello! Please enter your password: ');

    // Initializing conditions
    let hasUpperCase = false;
    let hasNumber = false;

    // Checking conditions with a loop
    for (let i = 0; i < password.length; i++) {
        const char = password[i];
        if (char >= 'A' && char <= 'Z') {
            hasUpperCase = true;
        }
        if (char >= '0' && char <= '9') {
            hasNumber = true;
        }
    }

    // Validating password requirements
    if (password.length >= 8 && hasUpperCase && hasNumber) {
        console.log('Success - Your password has been set successfully!');
        safePassword = true;
    } else {
        console.log('Your password does not meet the minimum requirements: 8 characters long, contain at least one uppercase letter, and contain at least one number.');
    }
}