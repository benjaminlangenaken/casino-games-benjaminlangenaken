// Click on play button:
const playButton = document.querySelector('.btn.play');

playButton.addEventListener('click', clickOnPlay = (event) => {
    const player = document.querySelector("i.player");
    player.classList.add("fas");
    player.classList.add("fa-fighter-jet");
    player.classList.add("fa-5x");

    player.style.transform = "scale(1)"
    player.style.transitionDuration = "2s";

    // Add refresh possibility
    playButton.addEventListener('click', clickOnPlay = (event) => {
        window.location.reload()
    })
})

