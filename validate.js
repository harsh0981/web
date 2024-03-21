 document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Validation function
    function validateForm() {
        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (username.trim() === "" || email.trim() === "") {
            alert("Please fill in all fields");
            return false;
        }

        // You can add more complex validation logic for the email field if needed

        return true;
    }

    if (validateForm()) {
        // Data for text file
        const username = document.getElementById("username").value;
        
        
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;
        const data = `Username: ${username}, Email: ${email}, Message: ${message}`;

        // Saving data to a text file
        const blob = new Blob([data], { type: "text/plain" });
        const link = document.createElement("a");
        link.download = "form_data.txt";
        link.href = window.URL.createObjectURL(blob);
        link.click();
    }
});
