
function faiAuguri() {

    rendiVisibile()

    var risposte = [
        {testo: `Ue beggggg, grazie mille 💪💪`},
        {testo: `Bah, cce cazzu ncete de festeggiare`},
        {testo: `Mo dimme tie, $$$, perchè dovrei risponderti?`},
        {testo: `Ahhhhh grazie lo zio`},
        {testo: `Grazie mille $$$, qualche volta di queste ci vediamo.`},
        {testo: `Guarda $$$, speravo mi venisse la febbre oggi per non farmi vedere da nessuno,comunque grazie.`},
        {testo: `Si grazie,ma tie ci sinti?.`},
        {testo: `Che culo ah, tutti sti auguri.`},
        {testo: `Grazie mille, ma stefano stae già mbriacu.`},
        {testo: `28 anni menati allu ientu, ma grazie comunque.`},
        {testo: `Stefano come sempre, non ha visto il messaggio e potrebbe non risponderti mai. Al massimo se ne accorge l'anno prossimo.`},
    ]


    var testo = document.getElementById('testo').value
    var nome = document.getElementById('nome').value

    var indice =  Math.floor(Math.random() * risposte.length) 

    console.log(`Ciao ${nome}, perchè mi hai scritto "${testo}"`)
    // window.alert(`Ciao ${nome}, perchè mi hai scritto "${testo}"`)

    /*var risposta = risposte[indice].testo
    if (risposta.includes("$$$")){
        risposta = risposta.replace("$$$",nome)
    }
    window.alert(risposta)*/
    
}


addEventListener("DOMContentLoaded", () => {
    var pulsante = document.getElementById("pulsanteAuguri")
    pulsante.addEventListener('click',faiAuguri)
});


function rendiVisibile(){
    var nero = document.getElementById('nero')
    nero.classList.add('visibile')

    nero.addEventListener('click',rendiInvisibile)
    // addTesto()
    

    var cella = document.getElementById('testoFinaleId')
    // cella.classList.add('animazioneEntra')
    
}


function rendiInvisibile(){

    var cella = document.getElementById('testoFinaleId')
    // document.getElementById('body').removeChild(cella)
    var nero = document.getElementById('nero')
    nero.classList.remove('visibile')
}

function addTesto() {
    var cella = document.createElement('div')
    cella.classList.add('testoFinale')
    cella.id = 'testoFinaleId'

    document.getElementById('nero').appendChild(cella)
}