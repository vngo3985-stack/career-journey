async function loadCareers() {
    const response = await fetch("data/careers.json");
    const careers = await response.json();

    const careerList = document.getElementById("career-list");

    careers.forEach(career => {
        const card = document.createElement("div");

        card.innerHTML = `
            <h2>${career.name}</h2>
            <p>${career.field}</p>
            <p>${career.salary}</p>
            <p>${career.description}</p>
        `;

        careerList.appendChild(card);
    });
}

loadCareers();
