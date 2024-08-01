function comprar(){
    let tipoIng = document.getElementById("tipo-ingresso").value;
    let qtd = parseInt(document.getElementById("qtd").value);

    if(qtd <= 0){
        alert("Digite uma quantidade válida.");
        return;
    } else{}

    if(tipoIng == "pista") {
        comprarPista(qtd);
    }
        else if(tipoIng == "superior"){
            comprarSuperior(qtd);
        }
            else{
                comprarInferior(qtd);
            }
}

function comprarPista(qtd){
    let qtdPista = parseInt(document.getElementById("qtd-pista").textContent);
    if(qtdPista < qtd){
        alert("Quantidade indisponível");
    }
        else{
            qtdPista = qtdPista - qtd;
            document.getElementById("qtd-pista").textContent = qtdPista;
            alert("Compra efetuada com sucesso");
        }
}

function comprarSuperior(qtd){
    let qtdSuperior = parseInt(document.getElementById("qtd-superior").textContent);
    if(qtdSuperior < qtd){
        alert("Quantidade indisponível");
    }
        else{
            qtdSuperior = qtdSuperior - qtd;
            document.getElementById("qtd-superior").textContent = qtdSuperior;
            alert("Compra efetuada com sucesso");
        }
}

function comprarInferior(qtd){
    let qtdInferior = parseInt(document.getElementById("qtd-inferior").textContent);
    if(qtdInferior < qtd){
        alert("Quantidade indisponível");
    }
        else{
            qtdInferior = qtdInferior - qtd;
            document.getElementById("qtd-inferior").textContent = qtdInferior;
            alert("Compra efetuada com sucesso");
        }
}