const addCard = document.getElementById("add_card")
const formContainer = document.querySelector(".form_container");
const cardContainer = document.querySelector(".card_container");
const form = document.getElementById("form");
const cancel = document.getElementById("cancel");
const deleteBtn = document.getElementsByClassName("deleteBtn");
// const editBtn = document.getElementsByClassName("editBtn");
const searchInput = document.getElementById("search");


// ADD BUTTON CARD
addCard.addEventListener("click", () =>{ 
    formContainer.style.display = "block"
})

// CLOSE FORM
cancel.addEventListener("click", () => {
    formContainer.style.display = "none"
})

// CREATE CARD

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const fullname = document.getElementById("fullname");
    const image = document.getElementById("image");
    const gender = document.getElementById("gender");
    const hobbies = document.getElementById("hobbies");
    const job = document.getElementById("job");
    const nationality = document.getElementById("nationality");
    
    const fullnameValue = fullname.value;
    const imageValue = image.value;
    const genderValue = gender.value;
    const hobbiesValue = hobbies.value;
    const jobValue = job.value;
    const nationalityValue = nationality.value;
    // console.log(imageValue)
    
    createCard(fullnameValue, imageValue, genderValue, hobbiesValue, jobValue, nationalityValue)
    
   fullname.value = ""
   image.value = ""
   hobbies.value = ""
   job.value = ""
   
   formContainer.style.display = "none"
})

function createCard(n, i, g, h, j, nt) {
    const newElement = document.createElement("div");
    newElement.innerHTML = `
    <img src="${i}">
    <h3 class="name">${n}</h3>
    <div class="data">
        <div class="label">
            <p>Gender</p>
            <p>Hobbies</p>
            <p>Job</p>
            <p>Nationality</p>
        </div>
        <div class="input">
            <p>: ${g}</p>
            <p>: ${h}</p>
            <p>: ${j}</p>
            <p>: ${nt}</p>
        </div>
    </div>
    <button class="deleteBtn">Delete</button>`

    newElement.className = "card";
    cardContainer.appendChild(newElement)

    const deleteBtnArray = newElement.getElementsByClassName("deleteBtn")[0]
    removeCard(deleteBtnArray)
}

// DELETE CARD
for (let element of deleteBtn) {
    removeCard(element);
}


function removeCard(element) {
    element.addEventListener("click", (e) => {
        const card = e.target.parentElement;
        cardContainer.removeChild(card)
    })
}

// SEARCH
searchInput.addEventListener("keyup", (e) => {
    const cards = document.querySelectorAll(".card");
    const searchValue = e.target.value.toLowerCase();

    cards.forEach(card => {
        const name = card.querySelector(".name")
        const userName = name.textContent.toLowerCase();
        if (userName.includes(searchValue)) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          } 
    });
})

