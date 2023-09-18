document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault();

    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;
    var usuario_logado = false;
    if(usuario == 'admin' && senha == 'admin'){
        
        usuario_logado = true;
        window.location.href = "index.html?usuario_logado=" + usuario_logado;

    } else{
        alert("Usuario e senha incorretos !")
    }
    
})

