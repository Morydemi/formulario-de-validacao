const btnEnviar = document.getElementById("btn-enviar");
const inputComTexto = document.querySelectorAll(".caixa-texto"); 
const escondido = document.querySelectorAll(".esconder");   


btnEnviar.addEventListener("click", () =>{
    
    

    inputComTexto.forEach(function(input, indice){      
        
        if(input.value !== ""){
            input.classList.add("preenchido")
            input.classList.add("nao-preenchido");
            escondido[indice].classList.add("esconder")
            
        } else if (input.value === ""){
            input.classList.add("nao-preenchido");
            input.classList.remove("preenchido")
            escondido[indice].classList.remove("esconder")

        }
    })
});

// const inputComTexto = document.querySelectorAll(".caixa-texto")
// const escondido = document.querySelectorAll(".esconder")

// btnEnviar.addEventListener("click", enviar);


// function enviar() {
//     inputComTexto.forEach(input => {
//         input.addEventListener('change', () => {
//             if (input.value !== "") {
//                 if(input.classList.contains("nao-preenchido")){
//                     input.classList.remove("nao-preenchido")
//                     input.classList.add("preenchido");
//                 } else{
//                     input.classList.add("preenchido")
//                 }
               
//             } else if (input.value == "") {               
//                 if(input.classList.contains("preenchido")){
//                     input.classList.remove("preenchido")
//                     input.classList.add("nao-preenchido");
//                 } else{
//                     input.classList.add("nao-preenchido")
//                 }
                

                             
//             }
//         });
//     })
// };