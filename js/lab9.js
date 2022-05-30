const baseUrl = "https://usersdogs-ip4weamexa-ew.a.run.app";

fetch(`${baseUrl}/dogs`)
.then(result => result.json())
.then(dogs => {
    const container = document.getElementById("lab9");

    dogs.forEach(dog => {
        const card = document.createElement("div");
        card.setAttribute("class", "card");
        card.innerHTML += `<img src="${baseUrl}${dog.dogImage}" alt="Dog" width="300" height="300">
        <div class="container">
            <h4><b>${dog.title}</b></h4>
            <p> sex: ${dog.sex} , age: ${dog.age}</p>
            <i>${dog.description}</i>
        </div>`
        container.appendChild(card);
    });
})
.catch(err => console.error(err));