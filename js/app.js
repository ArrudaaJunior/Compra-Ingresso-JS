function comprar(){
    let tipo = document.getElementById('tipo-ingresso');
    let quantidade = parseInt(document.getElementById('qtd').value);

    if(tipo.value == 'pista') {
        comprarPista(quantidade);
    }
}

function comprarPista(quantidade) {
    let quantidadePista = parseInt(document.getElementById('qtd-pista').textContent);
    if(quantidade > quantidadePista){
        alert('Quantidade indisponível para tipo posta');
    } else {
        quantidadePista = quantidadePista - quantidade;
        document.getElementById('qtd-pista').textContent = quantidadePista;
        alert('Compra com sucesso!');
    }
}