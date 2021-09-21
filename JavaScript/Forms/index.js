function validate() {
  let email = document.getElementById("email").value;
  let zipcode = document.getElementById("zipcode").value;
  let country = document.getElementById("country").value;
  let password = document.getElementById("password").value;
  let cpassword = document.getElementById("cpassword").value;
  let error_message = document.getElementById("error_message");

  error_message.style.padding = "10px";

  let text;
  if (password.length < 8) {
    text = "Please Enter valid Password";
    error_message.innerHTML = text;
    return false;
  }
  if (country.value === "") {
    text = "Please Enter Valid Country";
    error_message.innerHTML = text;
    return false;
  }
  if (isNaN(zipcode)) {
    text = "Please Enter valid Zip Code";
    error_message.innerHTML = text;
    return false;
  }
  if (email.indexOf("@") == -1 || email.length < 6) {
    text = "Please Enter valid Email";
    error_message.innerHTML = text;
    return false;
  }
  if (cpassword.length < 8) {
    text = "Please Enter Valid Password";
    error_message.innerHTML = text;
    return false;
  }
  alert("Form Submitted Successfully!");
  return true;
}
