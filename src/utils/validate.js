import React from 'react'

export const validate = (email,password) => {
    const checkEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

     // Password regex pattern: min 8 chars, at least 1 letter, 1 number, 1 special char
    const checkPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/

    // Test both
    const isEmailValid = checkEmail.test(email);
    const isPasswordValid = checkPassword.test(password);

    if(!isEmailValid) return "E-mail id is not valid" ;
    if(!isPasswordValid) return "Password is not valid ";

    // no error .
    return null;
}