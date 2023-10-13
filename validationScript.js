    // JavaScript code for form validation

	// Prevent form from submitting
  let form = document.getElementById('myForm');
  let regex = /^[a-zA-Z0-9]+$/;
  form.addEventListener('submit', function(e){
    if(inputField.value == ''){
      alert('Input is required!');
      e.preventDefault();}
  // Retrieve the input field value
    // Regular expression pattern for alphanumeric input
    // Check if the input value matches the pattern
    else if (!regex.test(inputField.value)) {
    // Invalid input: display error message
      alert('Invalid format!');
      e.preventDefault();
    }
    // Valid input: display confirmation and submit the form
    else {
      console.log(inputField.value);
      alert('Input submited!');
    }
  })


  

        
 