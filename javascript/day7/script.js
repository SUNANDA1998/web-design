function validationForm() {
    let isvalid = true;

    // Name Validation
    const name = document.getElementById('name').value;
    if (name === '' || name === null) {
        document.getElementById('name_error').textContent = 'Name is required';
        console.log("Name is required");
        isvalid = false;
        // return false;
    }

    // character only
    // regex --> regular expression
    else if (!/^[A-Za-z\sjhj]+$/.test(name)) {
        document.getElementById('name_error').textContent = 'Name must only contain letters';
        console.log("Name must only contain letters and spaces");
        isvalid = false;
    }
    
    // // name with number
    // else if (!/[a-zA-Z]/.test(name) || !/\d/.test(name)) {
    //     document.getElementById('name_error').textContent 
    //     = 'Name must contain both letters and numbers';
    //     console.log("Name must contain both letters and numbers");
    //     isValid = false;
    // }
  
    else {
        document.getElementById('name_error').textContent = ''; // Clear any previous error message
    }

    // Address Validation
    const address = document.getElementById('address').value;
    if (address === '' || address===null) {
        document.getElementById('add_error').textContent = 'Address is required';
        isValid = false;
    } else {
        document.getElementById('add_error').textContent = '';
    }

    // Email Validation
    const email = document.getElementById('email').value;
    const emailPattern = /^[a-zA-Z0-9._+-]+@([a-zA-Z0-9.-]+|\d{1,3}(\.\d{1,3}){3})\.[a-zA-Z]{2,3}$/;
    if (!emailPattern.test(email)) {
        document.getElementById('email_error').textContent = 'Invalid email format';
        isValid = false;
    } else {
        document.getElementById('email_error').textContent = '';
    }

    // Password Validation
    const password = document.getElementById('password').value;
    if (password.length < 6) {
        document.getElementById('password_error').textContent = 'Password must be at least 6 characters long';
        isValid = false;
    } else {
        document.getElementById('password_error').textContent = '';
    }

    // phone Validation
    const tele = document.getElementById('phone').value;
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
        document.getElementById('ph_er').textContent = 'Invalid phone number (10 digits required)';
        isValid = false;
    } else {
        document.getElementById('ph_er').textContent = '';
    }

    // Course Selection Validation
    const course = document.getElementById('myselect').value;
    if (course === '0') {
        document.getElementById('demo').textContent = 
        'Please select a course';
        isValid = false;
    } else {
        document.getElementById('demo').textContent = '';
    }

     // Gender Validation
     const gender = document.getElementsByName('gender')
     const genderSelected = Array.from(gender).some(radio => radio.checked);
     if (!genderSelected) {
         document.getElementById('gender_error').textContent = 'Please select your gender';
         isValid = false;
     } else {
         document.getElementById('gender_error').textContent = '';
     }

    // Terms and Conditions Validation
    const terms = document.getElementById('terms').checked;
    if (!terms) {
        document.getElementById('terms_error').textContent 
        = 'You must agree to the terms and conditions';
        isValid = false;
    
    } else {
        document.getElementById('terms_error').textContent 
        = '';
    }

    // if (isValid) {
    //     alert('Form submitted successfully!');
    // }

    // return isValid;

    if (isValid) 
        {
        // Retrieve form values
        const nameValue = document.getElementById('name').value;
        const addressValue = document.getElementById('address').value;
        const emailValue = document.getElementById('email').value;
        const passwordValue = document.getElementById('password').value;
        const teleValue = document.getElementById('phone').value;
        const courseValue = document.getElementById('myselect').value;

        let genderValue = '';
        gender.forEach(radio => {
            if (radio.checked) {
                genderValue = radio.value;
            }
        });

        const termsValue = document.getElementById('terms').checked;

        document.open(); 
        document.write('<h1>Form Values</h1>');
        document.write('<p><strong>Name:</strong> ' + nameValue + '</p>');
        document.write('<p><strong>Address:</strong> ' + addressValue + '</p>');
        document.write('<p><strong>Email:</strong> ' + emailValue + '</p>');
        document.write('<p><strong>Password:</strong> ' + passwordValue + '</p>');
        document.write('<p><strong>Phone:</strong> ' + teleValue + '</p>');
        document.write('<p><strong>Course:</strong> ' + courseValue + '</p>');
        document.write('<p><strong>Gender:</strong> ' + genderValue + '</p>');
        document.write(
            '<p><strong>Terms Agreed:</strong> ' + (termsValue ? 'Yes' : 'No') + '</p>'
        );
        document.close();
    }

    return isValid;
}

function validatePhone() {
    const tele = document.getElementById('tele').value;
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(tele)) {
        document.getElementById('ph_er').textContent = 'Invalid phone number (10 digits required)';
    } else {
        document.getElementById('ph_er').textContent = '';
    }
}

