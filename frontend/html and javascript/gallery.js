const form = document.getElementById("upload-form");

form.addEventListener("submit", async function(event) {
    event.preventDefault();

    const files = document.getElementById("file-input").files;

    if (files.length === 0) {
        document.getElementById("upload-message").textContent =
            "Please select an image.";
        return;
    }

    const formData = new FormData();

    for (let i = 0; i < files.length; i++) {
        formData.append("images", files[i]);
    }

    try {
        const response = await fetch(
            "http://localhost:3000/gallery",
            {
                method: "POST",
                body: formData
            }
        );

        const result = await response.json();

        document.getElementById("upload-message").textContent =
            result.message;

        loadGallery();

    } catch (error) {
        console.log(error);

        document.getElementById("upload-message").textContent =
            "Could not connect to server.";
    }
});


async function loadGallery() {

    try {
        const response = await fetch(
            "http://localhost:3000/gallery"
        );

        const images = await response.json();

        const gallery =
            document.getElementById("gallery-grid");

        gallery.innerHTML = "";

        images.forEach(image => {

            const img = document.createElement("img");

            img.src =
                "http://localhost:3000/uploads/" +
                image.image_path;

            img.alt = image.image_name;

            gallery.appendChild(img);
        });

    } catch (error) {
        console.log(error);
    }
}


loadGallery();