// Click on play button:
function clickOnPlay(event) {
    const getH2 = document.querySelector("h2");
    getH2.style.visibility = "visible";

    const getIcons = document.querySelector(".icons")
    getIcons.style.visibility = "visible";
}

const buttons = document.querySelectorAll('.btn')
for (let button of buttons) {
    button.addEventListener('click', clickOnPlay)
}

// Create random computer choice:
const compIcon = ["fas fa-hand-rock fa-7x", "fas fa-hand-paper fa-7x", "fas fa-hand-scissors fa-7x"]
randomIcon = () => {
    const random = Math.floor(Math.random() * 3);
    console.log(compIcon[random])
};

// Click on icons:
function clickOnIcon(event) {

    const addA = document.createElement("a");
    const addI = document.createElement("i");

    // Add players choice:
    const yourChoice = document.querySelector(".your-choice");
    yourChoice.style.visibility = "visible";

    const choice = document.querySelector(".playersChoice");
    choice.append(addA);
    addA.appendChild(addI);
    addI.className = `fas ${event.target.classList[1]} fa-7x`

    // Add computers choice:
    // const computersChoice = document.querySelector(".computers-choice");
    // computersChoice.style.visibility = "visible";

    // const compChoice = document.querySelector(".playersChoice");
    // compChoice.append(addA);
    // addA.appendChild(addI);
    // addI.className = `${randomIcon(event)}`;

    console.log(addI.className)
}

const icons = document.querySelectorAll('.fas')
for (let icon of icons) {
    icon.addEventListener('click', clickOnIcon)
}


// Confirm player's choice:
