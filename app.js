
function faiAuguri() {
    var testo = document.getElementById('testo').value
    var nome = document.getElementById('nome').value

    console.log(`Ciao ${nome}, perchè mi hai scritto "${testo}"`)
    window.alert(`Ciao ${nome}, perchè mi hai scritto "${testo}"`)
}


addEventListener("DOMContentLoaded", () => {
    var pulsante = document.getElementById("pulsanteAuguri")
    pulsante.addEventListener('click',faiAuguri)
});