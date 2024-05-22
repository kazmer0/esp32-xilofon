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
    let telapo_itt_van_s=26;
    let hullapelyhes_s=26;
    console.log("elindult");
    boci_gomb.addEventListener('click', () => {
        console.log("muksyik");
        boci_gomb.disabled = true;
        sussfel_gomb.disabled = true;
        oldmacdonald_gomb.disabled = true;
        telapo_itt_van_gomb.disabled = true;
        hullapelyhes_gomb.disabled = true;
   })
   sussfel_gomb.addEventListener('click', () => {
    console.log("muksyik");
    boci_gomb.disabled = true;
    sussfel_gomb.disabled = true;
    oldmacdonald_gomb.disabled = true;
    telapo_itt_van_gomb.disabled = true;
    hullapelyhes_gomb.disabled = true;
})
oldmacdonald_gomb.addEventListener('click', () => {
    console.log("muksyik");
    boci_gomb.disabled = true;
    sussfel_gomb.disabled = true;
    oldmacdonald_gomb.disabled = true;
    telapo_itt_van_gomb.disabled = true;
    hullapelyhes_gomb.disabled = true;
})
telapo_itt_van_gomb.addEventListener('click', () => {
    console.log("muksyik");
    boci_gomb.disabled = true;
    sussfel_gomb.disabled = true;
    oldmacdonald_gomb.disabled = true;
    telapo_itt_van_gomb.disabled = true;
    hullapelyhes_gomb.disabled = true;
})
hullapelyhes_gomb.addEventListener('click', () => {
    console.log("muksyik");
    boci_gomb.disabled = true;
    sussfel_gomb.disabled = true;
    oldmacdonald_gomb.disabled = true;
    telapo_itt_van_gomb.disabled = true;
    hullapelyhes_gomb.disabled = true;
})
   /*function bociboci(){console.log("1")}
   function sussfel(){console.log("1")}
   function oldmacdonald(){console.log("1")}
   function telapoittvan(){console.log("1")}
   function hullapelyhes(){console.log("1")}*/
});
      /*  countdown = setInterval(() => {
            timeLeft -= 1;
            timerDisplay.textContent = timeLeft;

            if (timeLeft <= 0) {
                clearInterval(countdown);
                boci_gomb.disabled = false;
                sussfel_gomb.disabled = false;
                oldmacdonald_gomb.disabled = false;
                telapo_itt_van_gomb.disabled = false;
                hullapelyhes_gomb.disabled = false;
        
            }
        }, 1000);
    });
});*/
