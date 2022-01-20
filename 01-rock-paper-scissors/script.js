// Click on play button:
const buttons = document.querySelectorAll('.btn');

for (let button of buttons) {
    button.addEventListener('click', clickOnPlay = (event) => {
        const getH2 = document.querySelector("h2");
        getH2.style.visibility = "visible";

        const getIcons = document.querySelector(".icons");
        getIcons.style.visibility = "visible";

    }, { once: true })
}

// Create random computer choice:
const icons = document.querySelectorAll('.fas');

randomIcon = () => {
    const random = Math.floor(Math.random() * 3);
    return (icons[random].className)
};

// Click on icons:
for (let icon of icons) {
    icon.addEventListener('click', clickOnIcon = (event) => {

        const addA = document.createElement("a");
        const addI = document.createElement("i");

        // Add players choice:
        const yourChoice = document.querySelector(".your-choice");
        yourChoice.style.visibility = "visible";

        const choice = document.querySelector(".playersChoice");
        choice.append(addA);
        addA.appendChild(addI);
        addI.className = `fas ${event.target.classList[1]} fa-7x`;

        // Make sure click event only happens once
    }, { once: true })
}


// Add computers choice:

for (let icon of icons) {
    icon.addEventListener('click', clickOnIcon = (event) => {

        const addA = document.createElement("a");
        const addI = document.createElement("i");

        // Add computers choice:
        const computersChoice = document.querySelector(".computers-choice");
        computersChoice.style.visibility = "visible";

        const compChoice = document.querySelector(".computersChoice");
        compChoice.append(addA);
        addA.appendChild(addI);
        addI.className = `${randomIcon(event)}`;

        // Make sure click event only happens once
    }, { once: true })
}


// Show result:
for (let icon of icons) {
    icon.addEventListener('click', clickOnIcon = (event) => {

        // const result = document.querySelector(".winner");
        // result.style.visibility = "visible";

        const playerResult = document.querySelector(".playersChoice i").className.slice(12, length - 6);
        const compResult = document.querySelector(".computersChoice i").className.slice(12, length - 6)

        console.log(playerResult);
        console.log(compResult);

        if (
            playerResult === "rock" && compResult === "rock" ||
            playerResult === "paper" && compResult === "paper" ||
            playerResult === "scissors" && compResult === "scissors"
        ) {
            const winnerTxt = document.querySelector(".winnerText")
            const addH1 = document.createElement("h1");
            addH1.className = "logo lg";
            addH1.innerHTML = "It's a draw... &#128528;"
            winnerTxt.append(addH1)
        } // else if {
        //     playerResult === "rock" && compResult === "rock" ||
        //     playerResult === "paper" && compResult === "paper" ||
        //     playerResult === "scissors" && compResult === "scissors"
        // }

    }, { once: true })
}
