const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        try {
            const response = await fetch("http://localhost:3000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            });

            let data = {};

            try {
                data = await response.json();
            } catch {
                data = { message: "Server error. Please try again." };
            }

            if (response.ok) {
                window.location.href = "familywebsite.html";
                return;
            }

            alert(data.message || "Invalid email or password");

        } catch (error) {
            console.error("Login request failed:", error);
            alert("Login failed. Please check the server and try again.");
        }
    });
}