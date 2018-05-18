
document.getElementById('botao').addEventListener("click",enviar,false);
function enviar() {

    var tipo = document.getElementById('tipo').value;
    if(tipo == "+"){

        ganho();
    }else if (tipo =="-") {

        despesa();
    }

}

function despesa(){
    var despesa = document.getElementById('despesa');
    var atual = document.getElementById('valor');
    var novo = parseFloat(despesa.textContent) + parseFloat(atual.value)

    //inserindo na tabela
    document.getElementById("table-body-despesa").innerHTML += "<tr><td>"+desc.value+"</td><td>"+atual.value+"</td></tr>"

    despesa.innerHTML='';
    despesa.innerHTML=novo;
    total()
}

function ganho() {
    var ganho = document.getElementById('ganho');
    var atual = document.getElementById('valor');
    var desc = document.getElementById('desc')
    //inserindo na tabela
    document.getElementById("table-body-ganho").innerHTML += "<tr><td>"+desc.value+"</td><td>"+atual.value+"</td></tr>"

    var novo = parseFloat(ganho.textContent) + parseFloat(atual.value)
    ganho.innerHTML='';
    ganho.innerHTML=novo;

    total()
}

function total(){
    var despesa = document.getElementById('despesa');
    var ganho = document.getElementById('ganho');

    var total = document.getElementById('total');

    var novo =  parseFloat(ganho.textContent) - parseFloat(despesa.textContent)
    total.innerHTML='';
    total.innerHTML=novo;

    if(novo > 0 ){

        total.className = "alert "+ " alert-success"
    }else{

        total.className = "alert "+ " alert-danger"
    }

}