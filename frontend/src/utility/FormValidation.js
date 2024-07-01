import validator from "validator";
import toast from "react-hot-toast";

// Function to validate form data
export const formValidation = (formdata) => {
    // Initialize an error object with empty strings
    const newError = {
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    };

    // Validate the name using a regular expression (only letters and spaces allowed)
    const validName = /^[a-zA-Z\s]+$/.test(formdata.name);
    if (!validName) {
        newError.name = "Invalid name"; // Set error message if name is invalid
    }

    // Validate the email using validator's isEmail method
    if (!validator.isEmail(formdata.email)) {
        newError.email = "Invalid email"; // Set error message if email is invalid
    }

    // Validate the password for complexity
    if (
        /^[a-z]+$/.test(formdata.password) || // Only lowercase letters
        /^[A-Z]+$/.test(formdata.password) || // Only uppercase letters
        /^\d+$/.test(formdata.password) ||    // Only numbers
        formdata.password.length < 6          // Less than 6 characters
    ) {
        newError.password="Weak Password"; // Set error message if password is weak
        // Show error toast with password requirements
        toast.error("Password must contain at least 1 capital letter, 1 small letter, 1 numeric value, and be longer than 6 characters");
    }

    // Validate that password and confirm password match
    if (formdata.password !== formdata.confirmPassword) {
        newError.confirmPassword ="Password doesn't match"; // Set error message if passwords don't match
    }

    // Return the error object with any validation errors
    return newError;
}

export default formValidation;