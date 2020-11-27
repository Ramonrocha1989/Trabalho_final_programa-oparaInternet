function adicionarnatabela() {
    if (localStorage.getItem('clienteNome')) {
        let nome = localStorage.getItem('clienteNome').split(';')
        let idade = localStorage.getItem('clienteIdade').split(';')
        let genero = localStorage.getItem('clienteGenero').split(';')
        let endereco = localStorage.getItem('clienteEndereco').split(';')
        let lanche = localStorage.getItem('clienteLanche').split(';')
        let comentario = localStorage.getItem('clienteComentario').split(';')

        var tbClientes = document.getElementById('tbClientes')

        for (var i = 0; i < nome.length; i++) {
            inserirLinha(tbClientes, nome[i], idade[i], genero[i], endereco[i], lanche[i], comentario[i]);
        }
    }
}
adicionarnatabela();

function excluipesquisa() {
    if (confirm("Confirma Exclusão")) {
        localStorage.clear();

    }
    location.reload()
}
let excluiitemstabela = document.getElementById('excluiitemstabela')
excluiitemstabela.addEventListener('click', excluipesquisa)


