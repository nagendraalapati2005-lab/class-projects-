
// =============================
// DATE AND TIME
// =============================

function showDateAndTime() {

    const now = new Date();

    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();

    document.getElementById("date").textContent =
        "Date: " + date;

    document.getElementById("time").textContent =
        "Time: " + time;
}

showDateAndTime();


// =============================
// RATING SLIDER
// =============================

const rating = document.getElementById("rating");
const ratingValue = document.getElementById("ratingValue");

rating.addEventListener("input", function () {

    ratingValue.textContent = rating.value;

});


// =============================
// FEEDBACK FORM
// =============================

const form = document.getElementById("feedbackForm");

form.addEventListener("submit", async function(event) {

    // Stop the page from refreshing
    event.preventDefault();

    // Get the information from the form
    const feedbackData = {

        firstName: document.getElementById("firstName").value,

        lastName: document.getElementById("lastName").value,

        email: document.getElementById("email").value,

        dob: document.getElementById("dob").value,

        gender: document.getElementById("gender").value,

        country: document.getElementById("country").value,

        rating: document.getElementById("rating").value,

        feedback: document.getElementById("feedback").value
    };


    try {

        // Send data to backend
        const response = await fetch(
            "http://localhost:3000/feedback",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(feedbackData)
            }
        );


        const result = await response.json();


        if (response.ok) {

            document.getElementById("message").textContent =
                "Thank you! Your feedback has been submitted.";

            // Clear the form
            form.reset();

            // Reset rating display
            ratingValue.textContent = "5";

        } else {

            document.getElementById("message").textContent =
                result.message;

        }

    } catch (error) {

        console.log(error);

        document.getElementById("message").textContent =
            "Could not connect to the server.";

    }

});
