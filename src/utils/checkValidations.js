const validateData = (email, password, fullName) => {
  const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

  const isValidPassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  const isValidFullName = fullName
    ? /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(
        fullName
      )
    : true;

  if (!isValidEmail) return "Invalid Email Address";
  if (!isValidPassword) return "Invalid Password";
  if (!isValidFullName) return "Invalid Name";

  return null;
};

export default validateData;
