"use strict"

    let nombre = document.querySelector("#nombre");
    let email = document.querySelector("#email");
    let telefono = document.querySelector("#telefono");
    let asunto = document.querySelector("#asunto");
    let mensaje = document.querySelector("#textarea");
    let button = document.querySelector("#button");
    let info = [];

        button.addEventListener("click" , (e) =>{
            e.preventDefault();
            info[0] = nombre.value;
            info[1] = email.value;
            info[2] = telefono.value;
            info[3] = asunto.value;
            info[4] = mensaje.value;

            let blob = new Blob([info] , {type:"text/plain ; charset = utf-8"});

            saveAs(blob , "contact.txt");
        });

