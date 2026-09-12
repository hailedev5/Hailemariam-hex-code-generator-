function getValue() {
  var value = document.getElementById("color-js").value;
  var alertMessage = "your selected color code is >" + value;

  // Create a temporary hidden textarea
  var tempInput = document.createElement("textarea");
  tempInput.value = alertMessage;
  document.body.appendChild(tempInput);

  // Select and copy
  tempInput.select();
  document.execCommand("copy");

  // Clean up
  document.body.removeChild(tempInput);

  alert("Copied: " + alertMessage);
}