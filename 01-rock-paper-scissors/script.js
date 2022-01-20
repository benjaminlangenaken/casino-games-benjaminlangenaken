// Click on play button:
const buttons = document.querySelector('.btn');

buttons.addEventListener('click', clickOnPlay = (event) => {
    const getH2 = document.querySelector("h2");
    getH2.style.visibility = "visible";

    const getIcons = document.querySelector(".icons");
    getIcons.style.visibility = "visible";
})

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

        icon.style.backgroundColor = "#2a9d8f";
        icon.style.color = "#264653";
        icon.style.transitionDuration = "0.8s";

        // Add players choice:
        const yourChoice = document.querySelector(".your-choice");
        yourChoice.style.visibility = "visible";
        yourChoice.style.opacity = "1";
        yourChoice.style.transitionDuration = "1.5s";

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
        computersChoice.style.opacity = "1";
        computersChoice.style.transitionDuration = "1.5s";
        computersChoice.style.transitionDelay = "1s";

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

        const playerResult = document.querySelector(".playersChoice i").className.slice(12, length - 6);
        const compResult = document.querySelector(".computersChoice i").className.slice(12, length - 6)

        if (
            playerResult === "rock" && compResult === "rock" ||
            playerResult === "paper" && compResult === "paper" ||
            playerResult === "scissors" && compResult === "scissors"
        ) {
            const winnerTxt = document.querySelector(".winnerText")
            const addH1 = document.createElement("h1");
            addH1.className = "logo xl";
            addH1.innerHTML = "It's a draw... &#128528;"
            winnerTxt.append(addH1)

            winnerTxt.style.opacity = "1";
            winnerTxt.style.transitionDuration = "1.5s";
            winnerTxt.style.transitionDelay = "2s";

        } else if (
            playerResult === "rock" && compResult === "scissors" ||
            playerResult === "paper" && compResult === "rock" ||
            playerResult === "scissors" && compResult === "paper"
        ) {
            const winnerTxt = document.querySelector(".winnerText")
            const addH1 = document.createElement("h1");
            addH1.className = "logo xl";
            addH1.innerHTML = "YOU WIN!!! &#128512"
            winnerTxt.append(addH1)

            winnerTxt.style.opacity = "1";
            winnerTxt.style.transitionDuration = "1.5s";
            winnerTxt.style.transitionDelay = "2s";

        } else {
            const winnerTxt = document.querySelector(".winnerText")
            const addH1 = document.createElement("h1");
            addH1.className = "logo xl";
            addH1.innerHTML = "YOU LOSE!!! &#128520;"
            winnerTxt.append(addH1)

            winnerTxt.style.opacity = "1";
            winnerTxt.style.transitionDuration = "1.5s";
            winnerTxt.style.transitionDelay = "2s";

        };

        buttons.innerHTML = "Play again!";

        // Add refresh possibility
        buttons.addEventListener('click', clickOnPlay = (event) => {
            window.location.reload()
        })

    }, { once: true })
}
