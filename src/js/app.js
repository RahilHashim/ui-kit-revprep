var nameField = document.getElementById('name_field');
var emailField = document.getElementById('field_focus');
var dropdownButtons = document.querySelectorAll('.dropdown-content li');
var dropBtn = document.getElementsByClassName('dropbtn')[0];
// DROP DOWN
for (var i = 0; i < dropdownButtons.length ; i++) {
	dropdownButtons[i].addEventListener('click', function(event){
		dropBtn.innerText = event.target.innerText;
		dropBtn.value = event.target.value;
	});
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */

myFunction = function () {
    document.getElementById("myDropdown").classList.toggle("show");
   
}
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
// END DROP DOWN

//LETTER VALIDATION
allLetters = function (inputtxt)  {   
  var letters = /^[A-Za-z_-\s]+$/;  
  if(inputtxt.value.match(letters)){  
  	return true;  
  } else {  
  	alert('Please input alphabet characters only');  
  	return false;  
  }  
}  
//EMAIL VALIDATION
validateEmail = function(inputtxt)  {  
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
	if(inputtxt.value.match(mailformat))  {   
		return true;  
	} else {  
		alert("You have entered an invalid email address!");  
		return false;  
		emailField.focus();  
	}  
}  

nameField.addEventListener('blur',function(event){
	if(event.target.value){
		allLetters(nameField);
	}
});

emailField.addEventListener('blur', function(){
	validateEmail(emailField);
});


// 
// 