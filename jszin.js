window.onload = function(){
    carregarUsuariosSalvos();
}

function cadastrarUsuario(){
    var nome = document.getElementById("nome").value;
    var senha = document.getElementById("senha").value;

    if(nome && senha){
        var novoUsuario = {
            nome: nome,
            senha: senha,
        };

        salvarUsuario(novoUsuario);
        
        adicionarUsuarioNaLista(novoUsuario);

        document.getElementById("nome").value="";
        document.getElementById("senha").value="";
    } else {
        alert("Preencha todos os campos do formulário.")
    }
}

function adicionarUsuarioNaLista(usuario){
    var listaUsuario = document.getElementById("listarUsuario");
    var novoUsuario = document.createElement("li")
    novoUsuario.innerHTML = `<strong>${usuario.nome}</strong>: ${usuario.senha}`;
    listaUsuario.appendChild(novoUsuario);
}

function salvarUsuario(usuario){
    var usuariosSalvos = JSON.parse(localStorage.getItem("Usuarios")) || [];

    usuariosSalvos.push(usuario);

    localStorage.setItem("Usuarios", JSON.stringify(usuariosSalvos));
   
    carregarUsuariosSalvos();
}

function carregarUsuariosSalvos() {
    var usuariosSalvos = JSON.parse(localStorage.getItem("Usuarios")) || [];
    var listaUsuario = document.getElementById("listarUsuario");

    listaUsuario.innerHTML = ""; // Limpa a lista antes de carregar os usuários

    usuariosSalvos.forEach(function(usuario) {
        adicionarUsuarioNaLista(usuario);
    });
}
