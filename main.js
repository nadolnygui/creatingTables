let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    criaLinha();
    atualizaTabela();   
})

function criaLinha() {
    const nomeContato = document.getElementById('name');
    const numeroContato = document.getElementById('number');

    let linha = '<tr>';
    linha += `<td>${nomeContato.value}</td>`
    linha += `<td>${numeroContato.value}</td>`
    linha += '</tr>';

    linhas += linha;
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}