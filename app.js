
function faiAuguri() {

    

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
        {testo: `29 anni menati allu ientu, ma grazie comunque.`},
        {testo: `Stefano come sempre, non ha visto il messaggio e potrebbe non risponderti mai. Al massimo se ne accorge l'anno prossimo.`},
        {testo: `Lo stesso.`},
        {testo: `Anche a te e famiglia.`},
        {testo: `E quiste su le oe... ah no aspe, quello era per pasqua`},
        {testo: `Beh grazie, ma affanculu a mammata comunque`},
        {testo: `Giuro che l'anno prossimo sparisco dalla circolazione, ma pe moi grazie`},
        {testo: `E quiste su le oe... ah no aspe, quello era per pasqua`},
    ]


    var testo = document.getElementById('testo').value
    var nome = document.getElementById('nome').value

    
    if(testo.trim() != "" && nome.trim() !=""){
        rendiVisibile()
        
        
        
        
        var indice =  Math.floor(Math.random() * risposte.length) 
        
        console.log(`Ciao ${nome}, perchè mi hai scritto "${testo}"`)
        // window.alert(`Ciao ${nome}, perchè mi hai scritto "${testo}"`)
        
        /*var risposta = risposte[indice].testo
        if (risposta.includes("$$$")){
            risposta = risposta.replace("$$$",nome)
            }
            window.alert(risposta)*/
            
            var messaggio = document.createElement('div')
            messaggio.classList = 'messaggio'
            
            var risposta = risposte[indice].testo
            if (risposta.includes("$$$")){
                risposta = risposta.replace("$$$",nome)
            }

            var result = submitToGoogleForm(nome,testo,risposta);
    messaggio.innerHTML = risposta

    var testoxl = document.createElement('div')
    testoxl.classList = 'testo-dentro-grande'
    testoxl.innerHTML = testo

    var cella = document.getElementById('risultato')
    cella.appendChild(testoxl)
    cella.appendChild(messaggio)


    var chiudi = document.createElement('div')
    chiudi.id = 'chiudi'
    chiudi.innerHTML = "Chiudi meh"
    cella.appendChild(chiudi)

    chiudi.addEventListener('click',rendiInvisibile)
    } else{
        window.alert("Brutt* mberda, completa i campi")
    }
}


addEventListener("DOMContentLoaded", () => {
    var pulsante = document.getElementById("pulsanteAuguri")
    pulsante.addEventListener('click',faiAuguri)
});


function rendiVisibile(){
    var nero = document.getElementById('nero')
    nero.classList.add('visibile')

    var cover = document.getElementById('cover')
    cover.style = 'z-index : 50 !important'

    nero.addEventListener('click',rendiInvisibile)
    aggiungiRiquadro()
    // addTesto()
    

    // var cella = document.getElementById('risultato')
    // cella.classList.add('animazioneEntra')
    
}


function rendiInvisibile(){

    var cella = document.getElementById('risultato')
    cella.classList.add('animazioneEsce')
    // document.getElementById('body').removeChild(cella)
    var nero = document.getElementById('nero')
    nero.classList.remove('visibile')

    var cover = document.getElementById('cover')
    cover.style = ''

    rimuoviRiquadro()
}

// function addTesto() {
//     var cella = document.createElement('div')
//     cella.classList.add('testoFinale')
//     cella.id = 'testoFinaleId'

//     document.getElementById('nero').appendChild(cella)
// }

function aggiungiRiquadro() {

    
    
    var nome = document.getElementById('nome').value

    var testo = document.getElementById('testo').value

    var cella = document.createElement('div')
    cella.id = 'risultato'

    var testo = document.createElement('div')
    testo.classList = 'testo-dentro'
    testo.innerText = nome

    // var testoxl = document.createElement('div')
    // testoxl.classList = 'testo-dentro-grande'
    // testoxl.innerHTML = testo

    var messaggio = document.createElement('div')
    messaggio.classList = 'messaggio'
    messaggio.innerHTML = 'prova'
    cella.append(testo)
    // cella.append(testoxl)


    var target = document.getElementById('cover')
    target.appendChild(cella)
}

function rimuoviRiquadro() {

    var target = document.getElementById('cover')
    var cella = document.getElementById('risultato')

    target.removeChild(cella)
}


/*
<div id="risultato"></div>
*/


function submitToGoogleForm(name, message,risposta) {
    const formUrl = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdMIDwneYuect463TTmDM04ZBHtXYrO1iymLnaQUck5vlBzmA/formResponse";
    
    const formData = new URLSearchParams();
    formData.append("entry.1193643198", name);  // ID del campo nome
    formData.append("entry.404148670", message); // ID del campo testo
    formData.append("entry.1543236664", risposta); // ID del campo testo

    fetch(formUrl, {
        method: "POST",
        body: formData,
        mode: "no-cors"  // No-CORS mode per evitare problemi di CORS
    })
    .then(() => {
        return true;
    })
    .catch((error) => {
        return false;
    });
}
