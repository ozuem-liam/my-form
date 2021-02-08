export default function validateInfo(values) {
    let errors = {}

    if(!values.username.trim()) {
        errors.username = "Username required"
    }

    //Email
    if(!values.email) {
        errors.email = "Email required"
    } else if(!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email address is invalid"
    }

    // Password
    if(!values.password) {
        errors.password = "Password required"
    } else if(values.password.length < 6) {
        errors.password = "Password need to be at list 6 characters"
    }

    //Confirm Password
    if(!values.password2) {
        errors.password2 = "Password required"
    } else if(values.password2 !== values.password) {
        errors.password2 = "Password do not match"
    }

    return errors;
}
