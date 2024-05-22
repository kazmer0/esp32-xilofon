    const boci_gomb = document.getElementById('boci_gomb');
    const sussfel_gomb = document.getElementById('sussfel_gomb');
    const oldmacdonald_gomb = document.getElementById('oldmacdonald_gomb');
    const telapo_itt_van_gomb = document.getElementById('telapo_itt_van_gomb');
    const hullapelyhes_gomb = document.getElementById('hullapelyhes_gomb');

    const boci_ido = document.getElementById('boci_ido').innerHTML;
    const sussfel_ido = document.getElementById('sussfel_ido').innerHTML;
    const oldmacdonald_ido = document.getElementById('oldmacdonald_ido').innerHTML;
    const telapo_itt_van_ido = document.getElementById('telapo_itt_van_ido').innerHTML;
    const hullapelyhes_ido = document.getElementById('hullapelyhes_ido').innerHTML;

    var boci_s=26;
    var sussfel_s=26;
    var oldmacdonald_s=26;
    var telapoittvan_s=26;
    var hullapelyhes_s=26;
    var ido=0;

    boci_gomb.addEventListener('click', () => {
        ido=boci_ido;
        boci_gomb.disabled = true;
        sussfel_gomb.disabled = true;
        oldmacdonald_gomb.disabled = true;
        telapo_itt_van_gomb.disabled = true;
        hullapelyhes_gomb.disabled = true;
        setInterval(() => {
        if(ido>=0){
         document.getElementById('boci_ido').innerHTML=ido;
    }else{
        document.getElementById('boci_ido').innerHTML=boci_s;

    }
     },1000)
   })
   sussfel_gomb.addEventListener('click', () => {
    ido=sussfel_ido;
    boci_gomb.disabled = true;
    sussfel_gomb.disabled = true;
    oldmacdonald_gomb.disabled = true;
    telapo_itt_van_gomb.disabled = true;
    hullapelyhes_gomb.disabled = true;
    setInterval(() => {
        if(ido>=0){
         document.getElementById('sussfel_ido').innerHTML=ido;
    }else{
        document.getElementById('sussfel_ido').innerHTML=sussfel_s;
    }
     },1000)
   })
oldmacdonald_gomb.addEventListener('click', () => {
    ido=oldmacdonald_ido;
    boci_gomb.disabled = true;
    sussfel_gomb.disabled = true;
    oldmacdonald_gomb.disabled = true;
    telapo_itt_van_gomb.disabled = true;
    hullapelyhes_gomb.disabled = true;
    setInterval(() => {
        if(ido>=0){
         document.getElementById('oldmacdonald_ido').innerHTML=ido;
    }else{
        document.getElementById('oldmacdonald_ido').innerHTML=oldmacdonald_s;

    }
     },1000)
   })
telapo_itt_van_gomb.addEventListener('click', () => {
    ido=telapo_itt_van_ido;
    boci_gomb.disabled = true;
    sussfel_gomb.disabled = true;
    oldmacdonald_gomb.disabled = true;
    telapo_itt_van_gomb.disabled = true;
    hullapelyhes_gomb.disabled = true;
    setInterval(() => {
        if(ido>=0){
         document.getElementById('telapo_itt_van_ido').innerHTML=ido;
    }else{
        document.getElementById('telapo_itt_van_ido').innerHTML=telapo_itt_van_s;

    }
     },1000)
   })

hullapelyhes_gomb.addEventListener('click', () => {
    ido=hullapelyhes_ido;
    boci_gomb.disabled = true;
    sussfel_gomb.disabled = true;
    oldmacdonald_gomb.disabled = true;
    telapo_itt_van_gomb.disabled = true;
    hullapelyhes_gomb.disabled = true;
    setInterval(() => {
        if(ido>=0){
         document.getElementById('hullapelyhes_ido').innerHTML=ido;
    }else{
        document.getElementById('hullapelyhes_ido').innerHTML=hullapelyhes_s;

    }
     },1000)
   })
   /*function bociboci(){console.log("1")}
   function sussfel(){console.log("1")}
   function oldmacdonald(){console.log("1")}
   function telapoittvan(){console.log("1")}
   function hullapelyhes(){console.log("1")}*/
 function countdown(){ setInterval(() => {
        ido-=1;
        if(ido<0){
        boci_gomb.disabled = false;
        sussfel_gomb.disabled = false;
        oldmacdonald_gomb.disabled = false;
        telapo_itt_van_gomb.disabled = false;
        hullapelyhes_gomb.disabled = false;
        }
   },1000);}
 countdown();