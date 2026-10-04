function toggleMenu() {

    const navLinks =
        document.getElementById("navLinks");

    navLinks.classList.toggle("active");

}


/* =====================
   CLOSE MENU
===================== */

const navItems =
    document.querySelectorAll(".nav-links a");

navItems.forEach(function(item) {

    item.addEventListener("click", function() {

        document
            .getElementById("navLinks")
            .classList.remove("active");

    });

});


/* =====================
   CONTACT FORM
===================== */

const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const message =
            document.getElementById("message").value.trim();


        if (
            name === "" ||
            email === "" ||
            message === ""
        ) {

            alert("Please fill all the fields.");

            return;
        }


        alert(
            "Thank you, " +
            name +
            "! Your message has been submitted."
        );


        contactForm.reset();

    }
);