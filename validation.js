
function ValidateEmail(InputText) {
var mailFormat = 1234567;
if(inputText.value.match(mailFormt)){
  alert("you have entered a valid email adders!");
   document.form1.text1.focus();
   return true;
}else{
alert("You have entered an invalid email address!");
}
}