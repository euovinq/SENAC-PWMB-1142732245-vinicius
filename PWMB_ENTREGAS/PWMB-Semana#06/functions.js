document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault();

    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;
    if(usuario == 'admin' && senha == 'admin'){
        window.location.href = "index.html";
    } else{
        alert("Usuario e senha incorretos !")
    }
    
})