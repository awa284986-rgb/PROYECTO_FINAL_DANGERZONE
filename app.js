function activarSOS(){
    let confirmar = confirm("⚠️ ¿Deseas activar la alerta de emergencia?");

    if(confirmar){
        let hora = new Date().toLocaleTimeString();

        alert(
            "🚨 ALERTA SOS ACTIVADA\n\n"+
            "📍 Ubicación enviada\n"+
            "📡 GPS conectado\n"+
            "👥 Contactos avisados\n"+
            "🚓 Policía notificada\n"+
            "⏰ Hora: "+hora
        );
    }
}



function abrirLogin(){
    document.getElementById("loginModal").style.display = "flex";
}

function cerrarLogin(){
    document.getElementById("loginModal").style.display = "none";
}


window.onclick = function(e){
    let modal = document.getElementById("loginModal");
    if(e.target === modal){
        cerrarLogin();
    }
}


function login(){

    let user = document.getElementById("usuario").value;
    let pass = document.getElementById("clave").value;

    if(user === "admin" && pass === "1234"){

        localStorage.setItem("login", "true");
        localStorage.setItem("user", user);

        actualizarUsuario();
        cerrarLogin();

    } else {
        alert("❌ Usuario o contraseña incorrectos");
    }
}


function actualizarUsuario(){

    let estado = localStorage.getItem("login");

    if(estado === "true"){
        let user = localStorage.getItem("user");

        document.querySelector(".usuario").innerHTML =
        "👤 " + user + " (Salir)";

        document.querySelector(".usuario").onclick = logout;
    }
}


function logout(){
    localStorage.clear();
    location.reload();
}


window.onload = actualizarUsuario;

function compartirUbicacion(){


let confirmar = confirm(
"⚠️ ¿Deseas compartir tu ubicación de emergencia?"
);



if(confirmar){


let boton = event.target;


boton.innerHTML = "📡 Enviando ubicación...";

boton.disabled = true;



setTimeout(()=>{


let hora = new Date()
.toLocaleTimeString();



alert(

"🚨 EMERGENCIA SIMULADA\n\n"+
"📍 Ubicación compartida\n"+
"🏠 Av. Arequipa 1234\n"+
"🌎 Lima - Perú\n"+
"📡 GPS activo\n"+
"👥 Contactos avisados\n"+
"🚓 Servicio de emergencia notificado\n"+
"⏰ Hora: "+hora


);



boton.innerHTML =
"✅ Ubicación enviada";


},2000);



}

}


function verDetalle(texto){

document.getElementById("detalleModal")
.style.display="flex";


document.getElementById("detalleTexto")
.innerHTML=
`
<b>${texto}</b><br><br>

📍 Ubicación registrada<br>
🕒 Tiempo real<br>
👥 Ciudadanos informando<br>
🚓 Autoridades notificadas
`;

}



function cerrarDetalle(){

document.getElementById("detalleModal")
.style.display="none";

}



function compartirAlerta(nombre){


navigator.clipboard.writeText(
"🚨 ALERTA: "+nombre+
"\nSistema SafeCity"
);


alert(
"📤 Alerta copiada y lista para compartir"
);


}




// filtros

let filtros=document.querySelectorAll(".filter");


filtros.forEach(btn=>{


btn.onclick=function(){


filtros.forEach(x=>
x.classList.remove("active")
);


this.classList.add("active");


alert(
"Filtro seleccionado: "
+this.innerText
);


}


});