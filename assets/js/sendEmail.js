//CREDIT: Code Institute Walkthrough Sending and from Emails documentation https://www.emailjs.com/ and customized
//Send email from the contact form
//create sendMail() function

function sendMail(contactForm) {
    emailjs.send('gmail', 'wroclaw', {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "message": contactForm.message.value
    })
        .then(
            // Alert sent if email is successful
            function () {
                //CREDIT: Stack Overflow, for the alert solution
                alert("Your email has been sent successfully, we will be in touch with you as soon as possible");
                window.location.reload(true);
            },
            // Alert sent if email fails
            function () {
                alert("Your email was not sent, please try again");
                window.location.reload(true);
            });
    // immediately stops reloading the page
    return false;
}

