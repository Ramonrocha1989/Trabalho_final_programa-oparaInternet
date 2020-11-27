const imglanche = document.getElementById('imglanche')

const cachorroQuente = document.getElementById('cachorroQuente')
const bauru = document.getElementById('bauru')
const xSalada = document.getElementById('xSalada')
const bauruAberto = document.getElementById('bauruAberto')
const hamburger = document.getElementById('hamburger')

function trocarfoto() {
    if (cachorroQuente.checked) {
        imglanche.src = 'img/cachorro-quente.png'
    } else if (bauru.checked) {
        imglanche.src = 'img/bauru.png'
    } else if (xSalada.checked) {
        imglanche.src = 'img/x-salada.png'
    } else if (bauruAberto.checked) {
        imglanche.src = 'img/bauru_aberto.png'
    } else if (hamburger.checked) {
        imglanche.src = 'img/hamburger.png'
    }

}
cachorroQuente.addEventListener('change', trocarfoto);
bauru.addEventListener('change', trocarfoto);
xSalada.addEventListener('change', trocarfoto);
bauruAberto.addEventListener('change', trocarfoto);
hamburger.addEventListener('change', trocarfoto);



function adicionarPesquisa() {

    let nome = document.getElementById('nome');
    let nomeCliente = nome.value;

    let endereco = document.getElementById('endereco');
    let enderecoCliente = endereco.value

    let idade = document.getElementById('idade');
    let idadeCliente = idade.value

    let comentario = document.getElementById('comentario');
    let comentarioCliente = comentario.value

    let genero = document.getElementsByName('genero');
    let generoCliente;

    let lanche = document.getElementsByName('lanche');
    let lancheCliente;



    for (i = 0; i < genero.length; i++) {
        if (genero[i].checked) {
            generoCliente = genero[i].value

        }
    }
    for (i = 0; i < lanche.length; i++) {
        if (lanche[i].checked) {
            lancheCliente = lanche[i].value;

        }
    }

    if (nomeCliente == "" || enderecoCliente == "" || idadeCliente == "" || comentarioCliente == "" || generoCliente == "" || lancheCliente == "") {
        alert("Preencha todos os campos")
        return;
    }

    var tbClientes = document.getElementById('tbClientes')
    inserirLinha(tbClientes, nomeCliente, idadeCliente, generoCliente, enderecoCliente, lancheCliente, comentarioCliente)


    salvapesquisa(nomeCliente, idadeCliente, generoCliente, enderecoCliente, lancheCliente, comentarioCliente)


    location.reload()
    return alert('Obrigado!! Pesquisa computada volte sempre');



}
let salvaform = document.getElementById('salvaform');
salvaform.addEventListener('click', adicionarPesquisa);


function inserirLinha(tabela, nomeCliente, idadeCliente, generoCliente, enderecoCliente, lancheCliente, comentarioCliente) {

    let linha = tabela.insertRow(-1);

    let col1 = linha.insertCell(0);
    let col2 = linha.insertCell(1);
    let col3 = linha.insertCell(2);
    let col4 = linha.insertCell(3);
    let col5 = linha.insertCell(4);
    let col6 = linha.insertCell(5);

    col1.textContent = nomeCliente;
    col2.textContent = idadeCliente;
    col3.textContent = generoCliente;
    col4.textContent = enderecoCliente;
    col5.textContent = lancheCliente;
    col6.textContent = comentarioCliente;

}


function salvapesquisa(nomeCliente, idadeCliente, generoCliente, enderecoCliente, lancheCliente, comentarioCliente) {
    if (localStorage.getItem('clienteNome') && localStorage.getItem('clienteEndereco') && localStorage.getItem('clienteIdade') && localStorage.getItem('clienteGenero') && localStorage.getItem('clienteLanche')) {

        let clienteNome = localStorage.getItem('clienteNome') + ';' + nomeCliente;
        localStorage.setItem('clienteNome', clienteNome)

        let clienteEndereco = localStorage.getItem('clienteEndereco') + ';' + enderecoCliente;
        localStorage.setItem('clienteEndereco', clienteEndereco)

        let clienteIdade = localStorage.getItem('clienteIdade') + ';' + idadeCliente;
        localStorage.setItem('clienteIdade', clienteIdade)

        let clienteComentario = localStorage.getItem('clienteComentario') + ';' + comentarioCliente
        localStorage.setItem('clienteComentario', clienteComentario)

        let clienteGenero = localStorage.getItem('clienteGenero') + ';' + generoCliente;
        localStorage.setItem('clienteGenero', clienteGenero)

        let clienteLanche = localStorage.getItem('clienteLanche') + ';' + lancheCliente;
        localStorage.setItem('clienteLanche', clienteLanche)
    } else {
        localStorage.setItem('clienteNome', nomeCliente)
        localStorage.setItem('clienteEndereco', enderecoCliente)
        localStorage.setItem('clienteIdade', idadeCliente)
        localStorage.setItem('clienteGenero', generoCliente)
        localStorage.setItem('clienteLanche', lancheCliente)
        localStorage.setItem('clienteComentario', comentarioCliente)
    }
}

