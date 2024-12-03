// event listener for form submission
document.getElementById("contactForm").addEventListener("submit", function(event) { //code to handle form submission
    event.preventDefault(); // Prevents form from submitting immediately

    // get form values - retrieve the values entered by the user and remove extra spaces around them
    const name = document.getElementById("name").value.trim(); // gets the value of the "name" input 
    const email = document.getElementById("email").value.trim(); //gets the value of the "email" input 
    const referral = document.getElementById("referral").value; // gets the selected reason from the dropdown list
    const phone = document.getElementById("phone").value.trim(); // gets the value of the "phone" input
    const message = document.getElementById("message").value.trim();// gets the value of the "message" input

    // validation for required fields - checks if certain fields are empty
    if (!name || !email || !referral || !message) {
        alert("Please fill in all required fields before submitting."); // alert prompt - if any required field is missing
        return; // Stops execution and form submission
    }

    // calls the validate email function to check the email format
    if (!validateEmail(email)) {
        alert("Please enter a valid email address."); // Alert prompt - if email format is invalid
        return; // Stops further execution if email is invalid
    }

    // if validation passes, show success message and reset form fields
    alert("Thank you for contacting us! We will get back to you shortly.");
    document.getElementById("contactForm").reset(); // Clears all input in the form fields
});

// email validation function using regular expression
function validateEmail(email) {
	// regular expression pattern for a valid email address
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	// tests whether email string matches the regular expression pattern. returns true if it does, false otherwise
    return emailPattern.test(email);  
}