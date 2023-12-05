window.onload = function(){
    carrergarUsuariosSalvos();
}

function cadastrarUsuario(){
    var nome = document.getElementById("nome").value;
    var senha = document.getElementById("senha").value;

    if(nome && senha){
        var novoUsuario = {
            nome: nome,
            senha: senha,
        };

        salvarUsuario(novoUsuario)
        
        adicionarUsuarioNaLista(novoUsuario)

        document.getElementById("nome").value="";
        document.getElementById("senha").value="";
    }else{
        alert("Preencha todos os campos do formulário.")
    }
}

function adicionarUsuarioNaLista(Usuario){
    var Listausuario = document.getElementById("listaUsuario");
    var novoUsuario = document.createElement("li")
    novoUsuario.innerHTML = `<strong> ${Usuario.nome} <strong>: ${Usuario.senha}`;
    Listausuario.appendChild(novoUsuario)
}

function salvarUsuario(usuario){
    var usuarioSalvos = JSON.parse(localStorage.getItem("usuario")) || [];

    usuarioSalvos.push(usuario);

    localStorage.setItem("Usuarios", JSON.stringify(usuarioSalvos)) || [];
   
    usuarioSalvos.forEach(adicionarUsuarioNaLista(usuario));
}