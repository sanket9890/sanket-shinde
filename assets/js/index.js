function validateAndSubmit() {
  var name = document.getElementById("username").value;
  if(name==='') {
    alert("Please fill username");
    return;
  }
    alert("hello "+name+" In the world of Javascript");
}