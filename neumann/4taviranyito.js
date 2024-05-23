
const synth = new Tone.Synth().toDestination();

function C_hang(){
    console.log("C hang lejatszasa");

    C.style.backgroundColor = '#262626';
    gomb_C.style.backgroundColor = '#262626';

    setTimeout(function() {
        C.style.backgroundColor = 'var(--C)';
        gomb_C.style.backgroundColor = 'var(--C)';
    }, 500);
    synth.triggerAttackRelease("C4", "8n");
}
function D_hang(){
    console.log("D hang lejatszasa");

    D.style.backgroundColor = '#262626';
    gomb_D.style.backgroundColor = '#262626';

    setTimeout(function() {
        D.style.backgroundColor = 'var(--D)';
        gomb_D.style.backgroundColor = 'var(--D)';
    }, 500);
    synth.triggerAttackRelease("D4", "8n");

}
function E_hang(){
    console.log("E hang lejatszasa");

    E.style.backgroundColor = '#262626';
    gomb_E.style.backgroundColor = '#262626';

    setTimeout(function() {
        E.style.backgroundColor = 'var(--E)';
        gomb_E.style.backgroundColor = 'var(--E)';
    }, 500);
    synth.triggerAttackRelease("E4", "8n");

}
function F_hang(){
    console.log("F hang lejatszasa");

    F.style.backgroundColor = '#262626';
    gomb_F.style.backgroundColor = '#262626';

    setTimeout(function() {
        F.style.backgroundColor = 'var(--F)';
        gomb_F.style.backgroundColor = 'var(--F)';
    }, 500);
    synth.triggerAttackRelease("F4", "8n");

}
function G_hang(){
    console.log("G hang lejatszasa");

    G.style.backgroundColor = '#262626';
    gomb_G.style.backgroundColor = '#262626';

    setTimeout(function() {
        G.style.backgroundColor = 'var(--G)';
        gomb_G.style.backgroundColor = 'var(--G)';
    }, 500);
    synth.triggerAttackRelease("G4", "8n");

}
function A_hang(){
    console.log("A hang lejatszasa");

    A.style.backgroundColor = '#262626';
    gomb_A.style.backgroundColor = '#262626';

    setTimeout(function() {
        A.style.backgroundColor = 'var(--A)';
        gomb_A.style.backgroundColor = 'var(--A)';
    }, 500);
    synth.triggerAttackRelease("A4", "8n");

}
function B_hang(){
    console.log("B hang lejatszasa");

    B.style.backgroundColor = '#262626';
    gomb_B.style.backgroundColor = '#262626';
    
    setTimeout(function() {
        B.style.backgroundColor = 'var(--B)';
        gomb_B.style.backgroundColor = 'var(--B)';
    }, 500);
    synth.triggerAttackRelease("B4", "8n");

}
function C2_hang(){
    console.log("C2 hang lejatszasa");

    C2.style.backgroundColor = '#262626';
    gomb_C2.style.backgroundColor = '#262626';

    setTimeout(function() {
        C2.style.backgroundColor = 'var(--C2)';
        gomb_C2.style.backgroundColor = 'var(--C2)';
    }, 500);
    synth.triggerAttackRelease("C5", "8n");

}



let gomb_C=document.getElementById("gomb_C");
let gomb_D=document.getElementById("gomb_D");
let gomb_E=document.getElementById("gomb_E");
let gomb_F=document.getElementById("gomb_F");
let gomb_G=document.getElementById("gomb_G");
let gomb_A=document.getElementById("gomb_A");
let gomb_B=document.getElementById("gomb_B");
let gomb_C2=document.getElementById("gomb_C2");

let C=document.getElementById("C");
let D=document.getElementById("D");
let E=document.getElementById("E");
let F=document.getElementById("F");
let G=document.getElementById("G");
let A=document.getElementById("A");
let B=document.getElementById("B");
let C2=document.getElementById("C2");

gomb_C.addEventListener("click", function(event){
    C_hang();
})
gomb_D.addEventListener("click", function(event){
    D_hang();

})
gomb_E.addEventListener("click", function(event){
    E_hang();

})
gomb_F.addEventListener("click", function(event){
    F_hang();

})
gomb_G.addEventListener("click", function(event){
    G_hang();

})
gomb_A.addEventListener("click", function(event){
    A_hang();

})
gomb_B.addEventListener("click", function(event){
    B_hang();
})
gomb_C2.addEventListener("click", function(event){
    C2_hang();

})





document.addEventListener("click", function(event) {
    switch (event.target.id) {
        case "C":
            C_hang();
            break;
        case "D":
           D_hang();
            break;
        case "E":
            E_hang();
            break;
        case "F":
            F_hang();
            break;
        case "G":
            G_hang();
            break;
        case "A":
            A_hang();
            break;
        case "B":
            B_hang();
            break;
        case "C2":
           C2_hang();
            break;                   
        default:
          break;
      }
})
document.addEventListener('keydown', (event) => {
    switch(event.key) {
        case"A": case"a":

        C_hang();
        break;
        case"S": case"s":
        D_hang();
        break;
        case"D": case"d":
        E_hang();
        break;
        case"F": case"f":
        F_hang();
        break;
        case"G": case"g":
        G_hang();
        break;
        case"H": case"h":
        A_hang();
        break;
        case"J": case"j":
        B_hang();
        break;
        case"K": case"k":
        C2_hang();
        break;
        default:
        break;
    }
})
