const section = document.querySelector("section");
const overlay = document.querySelector(".overlay");
const showBtn = document.querySelector(".show-modal");
const closeBtn = document.querySelector(".close-btn");

showBtn.addEventListener("click", () => section.classList.add("active"));

overlay.addEventListener("click", () =>
    section.classList.remove("active")
);

closeBtn.addEventListener("click", () =>
    section.classList.remove("active")
);

const form = document.getElementById('forrm');
console.log(form)
const cardContainer = document.getElementById('card-container');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // prevent form submission

    // Get form values
    const name = form.elements.name.value;
    const description = form.elements.description.value;
    const img = form.elements.img.files[0]; // Get first selected image
    const state = form.elements.state.value;
    const price = form.elements.price.value;

    // Create card elements
    const card = document.createElement('div');
    card.classList.add('card');

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');
    const imgElement = document.createElement('img');
    imgElement.alt = name;
    const reader = new FileReader(); // Create a new FileReader
    reader.onload = function () { // Add onload function
        imgElement.src = reader.result; // Set img src to the FileReader result
    }
    reader.readAsDataURL(img); // Read the selected image as a data URL
    imgContainer.appendChild(imgElement);

    const infoContainer = document.createElement('div');
    infoContainer.classList.add('info-container');
    const nameElement = document.createElement('h2');
    // nameElement = classList.add('title')
    nameElement.textContent = name;
    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = description;
    const stateElement = document.createElement('p');
    stateElement.textContent = state;
    const priceElement = document.createElement('p');
    priceElement.textContent = `$${price}`;

    // Assemble card elements
    infoContainer.appendChild(nameElement);
    infoContainer.appendChild(descriptionElement);
    infoContainer.appendChild(stateElement);
    infoContainer.appendChild(priceElement);
    card.appendChild(imgContainer);
    card.appendChild(infoContainer);
    cardContainer.appendChild(card);

    // Clear form
    form.reset();
});
