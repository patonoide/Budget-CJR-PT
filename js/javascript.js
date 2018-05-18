
document.getElementById('botao').addEventListener("click",enviar,false);
function enviar() {

    var tipo = document.getElementById('tipo').value;
    var tabelas = document.getElementById('tabelas');
    if(document.getElementById('total').textContent.trim() == "0"){

        tabelas.className = "row";
    }

    if(tipo == "+"){

        ganho();
    }else if (tipo =="-") {

        despesa();
    }
    atualizarporc()

}

function despesa(){
    //tota de despesas
    var despesa = document.getElementById('despesa');
    //novo valor
    var atual = document.getElementById('valor');
    //novo total de despesas
    var novo = parseFloat(despesa.textContent) + parseFloat(atual.value)

    //modificando o total de despesas
    despesa.innerHTML='';
    despesa.innerHTML=novo;
    //inserindo na tabela
    document.getElementById("table-body-despesa").innerHTML += "<tr><td>"+desc.value+"</td><td class='porcentagem_valor'>"+atual.value+"</td><td class='porcentagem'></td></tr>"


    total()
}

function ganho() {
    //tota de ganhos
    var ganho = document.getElementById('ganho');
    //novo valor
    var atual = document.getElementById('valor');
    //novo total de ganhos
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

    if(novo >= 0 ){

        total.className = "alert "+ " alert-success"
    }else{

        total.className = "alert "+ " alert-danger"
    }

}

function atualizarporc(){

    var table_despesa = document.getElementsByClassName('porcentagem')
    var porcentagem_valor = document.getElementsByClassName('porcentagem_valor')
    //calculando a porcentagem total
    var badge =  document.getElementById('badge-despesa')
    badge.innerHTML=(parseFloat(document.getElementById('despesa').textContent.trim()) / parseFloat(document.getElementById('ganho').textContent.trim())  *100).toFixed(2)+"%"

    for (var i = 0; i < table_despesa.length; i++) {
        table_despesa[i].innerHTML = (parseFloat(porcentagem_valor[i].textContent.trim()) / parseFloat(document.getElementById('ganho').textContent.trim())  *100).toFixed(2)+"%"
    }


}
