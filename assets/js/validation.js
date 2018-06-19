// Just one field
// try to validate the email input
var item = document.querySelector('.field input[type="email"]');
function CheckIfISEmpty(item, formName) {
  //Validation Form
  function validationForm() {
    var atrname = item.getAttribute("name"); // get the name
    var x = document.forms[formName][atrname].value
    if (x == "") {
      var hasP = item.parentElement.childNodes;
      // Check the field has already a p tag
      for (var i = 0; i < hasP.length; i++) {
        if (hasP[i].nodeName.toUpperCase() == 'P') {
          console.log((hasP[i]).parentNode);
          (hasP[i]).parentNode.removeChild(hasP[i]); //remove the p tag
        }
      }
      var s1 = atrname.substring(0, 1).toUpperCase();
      atrname = s1 + atrname.substring(1);
      var neP = document.createElement("p");
      var neText = document.createTextNode(atrname + " field is required !");
      neP.appendChild(neText);
      neP.className = "validate-me";
      neP.id = 'tempo';
      item.parentElement.appendChild(neP);
    } else {
      var existingPara = document.getElementById("tempo");
      if (existingPara) {
        existingPara.parentNode.removeChild(existingPara); //remove the child created
      }
    }
  } // End of ValidationForm
  // fire the event
    item.addEventListener('blur', function() {
    validationForm();
  }, false);
} // end of function CheckIfISEmpty
//  Create a list with all items the we need to be affected by this validation
var listOfRequired = ['color', 'date', 'number', 'url', 'email', 'datetime', 'as'];
// apply validation for all items
for (var i = 0; i < listOfRequired.length; i++) {
  var item = document.querySelector('.field input[type=' + listOfRequired[i] + ']');
  if (item) {
    CheckIfISEmpty(item, 'formName');
  }
}

// +++++++++++++++++++


// // Just one field
// // try to validate the email input
// var item = document.querySelector('.field input[type="email"]');
// // target the form
// var form= document.getElementById('firstForm');
// function validationForm(){
//   var x = document.forms["formName"]["email"].value
//   if(x==""){
//     var neP= document.createElement("p");
//
//     var atrname=item.getAttribute("name"); // get the name
//     // make it toUpperCase
//      var s1=atrname.substring(0,1).toUpperCase();
//         atrname=s1+atrname.substring(1);
//     var neText= document.createTextNode(atrname+" field is required !");
//     neP.appendChild(neText);
//     neP.className="validate-me";
//     neP.id='tempo';
//     item.parentElement.appendChild(neP);
//      return false;
//   } else{
//     var existingPara= document.getElementById("tempo");
//     if (existingPara) {
//       existingPara.parentNode.removeChild(existingPara); //remove the child created
//         }
//       }
// }
// // validationForm();
// item.addEventListener('blur',function(){
// validationForm();
// },false);
