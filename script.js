async function loadCertificate() {

    const params = new URLSearchParams(window.location.search);

    const id = params.get("id");

    if (!id) return;

    try {

        const response = await fetch("data.json");

        const certificates = await response.json();

        const certificate = certificates.find(
            item => item.id.toUpperCase() === id.toUpperCase()
        );

        if (!certificate) {

            document.querySelector(".card").innerHTML = `
                <img src="assets/logo.png" class="logo">

                <h1>Slash Mark IT Solutions</h1>

                <h2 style="color:red">
                    Certificate Not Found
                </h2>

                <p style="text-align:center">
                    No certificate found for ID:
                    <b>${id}</b>
                </p>

                <a href="index.html" class="btn">
                    Go Back
                </a>
            `;

            return;
        }

        document.getElementById("name").textContent =
            certificate.name;

        document.getElementById("id").textContent =
            certificate.id;

        document.getElementById("course").textContent =
            certificate.course;

        document.getElementById("duration").textContent =
            certificate.duration;

        document.getElementById("status").textContent =
            certificate.status;

        document.getElementById("refId").textContent =
            certificate.reference;

        document.getElementById("certificateLink").href =
            certificate.certificate;

    } catch (error) {

        console.error(error);

    }

}

loadCertificate();
