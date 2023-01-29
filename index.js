function submitForm(e) {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let subject = document.getElementById("subject").value;
  let number = document.getElementById("number").value;
  let details = document.getElementById("details").value;
  if (
    name == "" ||
    email == "" ||
    subject == "" ||
    number == "" ||
    details == ""
  ) {
    alert("All fields are required, Fill it properly");
  } else {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("number").value = "";
    document.getElementById("details").value = "";
    document.getElementById("msg").innerHTML =
      "Thanks, we will contact you soon";
  }
  setTimeout(()=>{
    document.getElementById("msg").innerHTML = "";
  }, 3000)
}
