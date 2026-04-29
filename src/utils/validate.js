// Email regex pattern - validates standard email format
export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Password regex - minimum 8 characters, at least one uppercase, one lowercase, one number, and one special character
export const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const validateEmail = (email) => {
  return emailRegex.test(email);
};

export const validatePassword = (password) => {
  return passwordRegex.test(password);
};

export const validateForm = (email, password, confirmPassword) => {
  const errors = {};

  // Validate email
  if (!email) {
    errors.email = "Email is required";
  } else if (!validateEmail(email)) {
    errors.email = "Please enter a valid email address";
  }

  // Validate password
  if (!password) {
    errors.password = "Password is required";
  } else if (!validatePassword(password)) {
    errors.password = "Password must be at least 8 characters with uppercase, lowercase, number, and special character";
  }

  // Validate confirm password if provided
  if (confirmPassword && password !== confirmPassword) {
    errors.confirmPassword = "Passwords do not match";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};