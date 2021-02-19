function validateForm() {
  var x = document.forms["myForm"]["firstname"]["lastname"]["email"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}