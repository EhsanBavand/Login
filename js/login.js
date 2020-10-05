// Script homework 1 - login.js

// Function called when the form is submitted.
// Function validates the form data and returns a Boolean value.
/*
Steps:
- Use an event listener and DOMContentLoaded to call a function init().
- Function init():
	- Using JavaScript, append the message 'in init' after the Login button. Make it green.
	- Using JavaScript, append the current date and time after the Login button.
	- When the user clicks on the Login button, it then calls the function validateForm()
- Function validateForm():
	- Verifies the email text length is equal to 0.
	- Verifies that the email contains the symbol @ somewhere after the first position.
	- Verifies the password text length is less than 6.
	- Function returns true if all these rules are validated, otherwise return false
		and append a new message after the Login button.
		Error message example (make it red):
			Error! Please complete the form!
			* Email address must be filled in!
			* Email address must contain the @ symbol!
			(This won’t be visible because of HTML 5 built-in validation, but add it anyway)
			* Password length must be at least 6 characters!

- DO NOT use alerts in your submitted program.

* Bonus 10% of the assignment’s worth:
	add better email and password input validation by using regular expressions.

Hints:
	At a minimum, you will be using these JavaScript methods:
		.addEventListener
		.querySelector
		.getElementById
		.fontcolor
		.innerHTML
		.createElement
		.appendChild
		.lastChild
		.remove()
		new Date() methods
		.value.length
		.value.indexOf
		.includes

*/

function validateForm()
{
  'use strict';

	console.log("in validate form");

  // Get references to the form elements:
  var emailAdd = $('#email');
  var password = $('#password');
  var fieldset = $('fieldset');

  var isError = false;

  var secondDiv = $('#newSecondDiv');
  if(secondDiv.length != 0)
    if(fieldset.find(secondDiv))
        secondDiv.remove();

  var str = "Error! Please complete the form!";

  // var amp = /^$/;
  // if(emailAdd.value.match(amp))
  if(emailAdd.val().length == 0)
  {
    str += "<br />  * Email address must be filled in!";

    isError = true;
  }

  // var at  = /@/;
  // if(!(emailAdd.value.match(at)))
  if(!(emailAdd.val().indexOf('@') > 0))
  {
    str += "</br> * Email address must contain the @ symbol!";

    isError = true;
  }

  // var len  = /^.{0,5}$/;
  // if(password.value.match(len))
  if(password.val().length < 6)
  {
    str += "</br> * Password length must be at least 6 characters!";

    isError = true;
  }


	if (isError == false)
  {
		return true;
	}
	else
  {
    var result = str.fontcolor("Red");

    var newDiv = $('<div id="newSecondDiv"></div>');
    newDiv.append(result);

    fieldset.append(newDiv);

		console.log("returned false: do not submit");
		return false;
	}

} // End of validateForm() function.

// Function called when the window has been loaded.
// Function needs to add an event listener to the form.
function init()
{
  'use strict';

  //Read on: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode

  $('#loginForm').css('width', '23em');

  var fieldset = $('fieldset');

  var newdiv = $('<div id="newFirstDiv"></div>');

  var str = "Today\'s Message: ";
  str += "\"in init\"".fontcolor("DarkGreen");
  str += "</br>Today\'s date: " + new Date().toDateString();
  str += "</br>Time now: " + new Date().toLocaleTimeString('en-US');

  newdiv.append(str);

  fieldset.append(newdiv);

  // Confirm that document.getElementById() can be used:
  if (document && document.getElementById)
  {
		console.log("in init document");

    loginForm.onsubmit = validateForm;

  }

} // End of init() function.

// Assign an event listener to the window's load event:
document.addEventListener('DOMContentLoaded', init);
