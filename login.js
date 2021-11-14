const togglePassword = document.getElementById("togglePassword");
const password = document.getElementById("password");
if (togglePassword) {
  togglePassword.addEventListener("click", (e) => {
    // toggle the type attribute
    const type =
      password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    // toggle the eye slash icon
    togglePassword.classList.toggle("zmdi-eye-off");
  });
}

function validateForm() {
  if (document.getElementById("fname")) {
    if (!validateName()) {
      return false;
    }
  }
  if (validateEmail()) {
    if (check_pass()) {
      if (document.getElementById("phno")) {
        if (phonenumber()) {
          document.getElementById("form").submit();
        }
      } else document.getElementById("form").submit();
    }
  }
}

function validateName() {
  var fname = document.getElementById("fname");
  var lname = document.getElementById("lname");
  var ferror = document.getElementById("ferror");
  var lerror = document.getElementById("lerror");

  let RegExp1 = new RegExp("^[a-zA-Z]+( [a-zA-Z]*)*$");
  ferror.innerHTML = "";
  lerror.innerHTML = "";
  if (fname.value == "") {
    ferror.innerHTML = " *   First Name is required.";
    ferror.style.color = "red";
    fname.focus();
    return false;
  } else if (RegExp1.test(fname.value)) {
    ferror.innerHTML = "";

    if (lname.value == "") {
      lerror.innerHTML = " *   Last Name is required.";
      lerror.style.color = "red";
      lname.focus();
      return false;
    } else if (RegExp1.test(lname.value)) {
      ferror.innerHTML = "";
      lerror.innerHTML = "";
      return true;
    } else {
      lerror.innerHTML = "  *  Invalid Last Name";
      lerror.style.color = "red";
      lname.focus();
      return false;
    }
  } else {
    ferror.innerHTML = "  *  Invalid First Name";
    ferror.style.color = "red";
    fname.focus();
    return false;
  }
}

function validateEmail() {
  var email = document.getElementById("email");
  var error = document.getElementById("error");
  let regexp =
    /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;

  if (email.value == "") {
    error.innerHTML = " *   Email is required.";
    error.style.color = "red";
    email.focus();
    return false;
  } else if (regexp.test(email.value)) {
    error.innerHTML = "  *  Valid";
    error.style.color = "green";
    return true;
  } else {
    error.innerHTML = "  *  Invalid";
    error.style.color = "red";
    return false;
  }
}

function check_pass() {
  var strength = {
    1: "Worst  😡",
    2: "Bad  😠",
    3: "Weak  😐",
    4: "Good  🙂",
    5: "Strong  😊",
  };
  var pwd = document.getElementById("password");
  var val = document.getElementById("password").value;
  var meter = document.getElementById("meter");
  var mbox = document.getElementById("mbox");
  var text = document.getElementById("password-strength-text");
  var no = 0;

  if (val != "") {
    mbox.style.display = "flex";
    meter.style.display = "inline-block";

    if (
      val.length > 7 &&
      val.match(/[a-z]/) &&
      val.match(/[A-Z]/) &&
      val.match(/\d+/) &&
      val.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/)
    )
      no = 5;
    else if (
      val.length > 7 &&
      val.match(/[a-z]/) &&
      val.match(/[A-Z]/) &&
      val.match(/\d+/)
    )
      no = 4;
    else if (
      val.length > 7 &&
      ((val.match(/[a-z]/) && val.match(/\d+/) && val.match(/[A-Z]/)) ||
        (val.match(/[a-z]/) &&
          val.match(/[A-Z]/) &&
          val.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/)) ||
        (val.match(/[A-Z]/) &&
          val.match(/\d+/) &&
          val.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/)) ||
        (val.match(/[a-z]/) &&
          val.match(/\d+/) &&
          val.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/)))
    )
      no = 3;
    else if (
      val.length > 7 &&
      ((val.match(/[a-z]/) && val.match(/\d+/)) ||
        (val.match(/[a-z]/) && val.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/)) ||
        (val.match(/[A-Z]/) && val.match(/\d+/)) ||
        (val.match(/[A-Z]/) && val.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/)) ||
        val.match(/[a-z]/) ||
        val.match(/[A-Z]/) ||
        (val.match(/[a-z]/) && val.match(/[A-Z]/)) ||
        val.match(/\d+/) ||
        (val.match(/\d+/) && val.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/)) ||
        val.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/))
    )
      no = 2;
    else if (val.length <= 7) no = 1;

    text.innerHTML = "Strength: " + "<strong>" + strength[no] + "</strong>";
    if (no == 1) {
      $("#meter").animate({ width: "10%" }, 300);
      mbox.style.borderColor = "red";
      meter.style.backgroundColor = "red";
      text.style.color = "red";
      pwd.focus();
      return false;
    } else if (no == 2) {
      $("#meter").animate({ width: "20%" }, 300);
      meter.style.backgroundColor = "red";
      mbox.style.borderColor = "red";
      text.style.color = "red";
      pwd.focus();
      return false;
    } else if (no == 3) {
      $("#meter").animate({ width: "40%" }, 300);
      meter.style.backgroundColor = "#FF8000";
      mbox.style.borderColor = "#FF8000";
      text.style.color = "#FF8000";
      pwd.focus();
      return false;
    } else if (no == 4) {
      $("#meter").animate({ width: "70%" }, 300);
      meter.style.backgroundColor = "rgb(0, 187, 0)";
      mbox.style.borderColor = "rgb(0, 187, 0)";
      text.style.color = "rgb(0, 187, 0)";
      return true;
    } else if (no == 5) {
      $("#meter").animate({ width: "100%" }, 300);
      meter.style.backgroundColor = "green";
      mbox.style.borderColor = "green";
      text.style.color = "green";
      return true;
    }
  } else {
    text.innerHTML = "";
    text.style.color = "#666666";
    meter.style.display = "none";
    mbox.style.display = "none";
    return false;
  }
}

function phonenumber() {
  var phno = document.getElementById("phno");
  var ph_error = document.getElementById("ph_error");
  let RegExp1 = new RegExp(
    "^([1-9]{1})([0-9]{2})?([-])([0-9]{3})?([-])([0-9]{4})$"
  );
  let RegExp2 = new RegExp(
    "^([1-9]{1})([0-9]{2})?([.])([0-9]{3})?([.])([0-9]{4})$"
  );
  let RegExp3 = new RegExp("^([1-9]{1})([0-9]{2})([0-9]{3})([0-9]{4})$");
  let RegExp4 = new RegExp("^([1-9]{1})([0-9]{2}) ([0-9]{3}) ([0-9]{4})$");
  if (phno.value == "") {
    ph_error.innerHTML = "  *  Phone number cannot be empty";
    ph_error.style.color = "red";
    return false;
  } else if (RegExp1.test(phno.value)) {
    ph_error.innerHTML = "  *  Valid";
    ph_error.style.color = "green";
    return true;
  } else if (RegExp2.test(phno.value)) {
    ph_error.innerHTML = "  *  Valid";
    ph_error.style.color = "green";
    return true;
  } else if (RegExp3.test(phno.value)) {
    ph_error.innerHTML = "  *  Valid";
    ph_error.style.color = "green";
    return true;
  } else if (RegExp4.test(phno.value)) {
    ph_error.innerHTML = "  *  Valid";
    ph_error.style.color = "green";
    return true;
  } else {
    ph_error.innerHTML = "  *  Invalid";
    ph_error.style.color = "red";
    phno.focus();
    return false;
  }
}
