
function faiAuguri() {
    var testo = document.getElementById('testo').value
    var nome = document.getElementById('nome').value

    console.log(`Ciao ${nome}, perchè mi hai scritto "${testo}"`)
}


addEventListener("DOMContentLoaded", () => {
    var pulsante = document.getElementById("pulsanteAuguri")
    pulsante.addEventListener('click',handleSubmit)
});


// var form = document.getElementById("form-auguri");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = ""
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          status= "Thanks for your submission!";
          console.log(status)
          form.reset()
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              status = data["errors"].map(error => error["message"]).join(", ")
            } else {
              status = "Oops! There was a problem submitting your form"
            }
          })

          console.log(status)
        }
      }).catch(error => {
        status = "Oops! There was a problem submitting your form"
        console.log(status)
      });
    }
    // form.addEventListener("submit", handleSubmit)