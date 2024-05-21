document.addEventListener('DOMContentLoaded', (event) => {
    const boci_gomb = document.getElementById('boci_gomb');
    const sussfel_gomb = document.getElementById('sussfel_gomb');
    const oldmacdonald_gomb = document.getElementById('oldmacdonald_gomb');
    const telapo_itt_van_gomb = document.getElementById('telapo_itt_van_gomb');
    const hullapelyhes_gomb = document.getElementById('hullapelyhes_gomb');

    const boci_ido = document.getElementById('boci_ido');
    const sussfel_ido = document.getElementById('sussfel_ido');
    const oldmacdonald_ido = document.getElementById('oldmacdonald_ido');
    const telapo_itt_van_ido = document.getElementById('telapo_itt_van_ido');
    const hullapelyhes_ido = document.getElementById('hullapelyhes_ido');

    let boci_s=26;
    let sussfel_s=26;
    let oldmacdonald_s=26;
    boci_gomb.addEventListener('click', () => {
        let timeLeft = 26;

        // Indítsa el a visszaszámlálót
        timerDisplay.textContent = timeLeft;
        actionButton.disabled = true;
        startButton.disabled = true;

        countdown = setInterval(() => {
            timeLeft -= 1;
            timerDisplay.textContent = timeLeft;

            if (timeLeft <= 0) {
                clearInterval(countdown);
                actionButton.disabled = false;
                startButton.disabled = false;
            }
        }, 1000);
    });
});
