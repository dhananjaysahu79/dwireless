export default function validateInfo(values) {
    let errors = {};

    if (!values.username.trim()) {
      errors.username = 'Username required';
    }else if (!/^([A-Za-z ]){2,30}$/.test(values.username)) {
      errors.username = 'Enter a valid name';
    }

    if (!values.email) {
      errors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!values.phone) {
      errors.phone = 'Phone no is required';
    } else if (values.phone.length !== 10) {
      errors.phone = 'Phone number needs to be 10 digits';
    }

    if (!values.address) {
      errors.address = 'Address is required';
    } else if (values.address.length < 20) {
      errors.address = 'Please enter your full address';
    }

    if(!values.password) {
      errors.password = 'Password is required';
    } else if(values.password.length < 8) {
        errors.password = 'Pasword should be minimum 8 character long'
    }

    if(!values.password2) {
      errors.password2 = 'Password is required';
    } else if(values.password !== values.password2) {
        errors.password2 = 'Pasword should be matched as above'
    }

    return errors;
  }