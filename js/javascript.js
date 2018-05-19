
document.getElementById('botao').addEventListener("click",enviar,false);
function enviar() {

    var tipo = document.getElementById('tipo').value;
    var tabelas = document.getElementById('tabelas');
    if(document.getElementById('total').textContent.trim() == "0"){

        tabelas.className = "row";
    }
    //chama a função de acordo o select
    if(tipo == "+"){

        ganho();
    }else if (tipo =="-") {

        despesa();
    }
    //atualiza as porcentagens
    atualizarporc()

}

function despesa(){
    //total de despesas
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
    //total de ganhos
    var ganho = document.getElementById('ganho');
    //novo valor
    var atual = document.getElementById('valor');
    //novo total de ganhos
    var desc = document.getElementById('desc')
    //inserindo na tabela
    document.getElementById("table-body-ganho").innerHTML += "<tr><td>"+desc.value+"</td><td>"+atual.value+"</td></tr>"


    //calcula novo total
    var novo = parseFloat(ganho.textContent) + parseFloat(atual.value)
    //modifica o valor
    ganho.innerHTML='';
    ganho.innerHTML=novo;

    total()
}

function total(){
    //total de despesas
    var despesa = document.getElementById('despesa');
    //total de ganhos
    var ganho = document.getElementById('ganho');
    //valor total
    var total = document.getElementById('total');
    //calcula novo total de gastos
    var novo =  parseFloat(ganho.textContent) - parseFloat(despesa.textContent)
    //modifica o total de gastos
    total.innerHTML='';
    total.innerHTML=novo;
    //modifica a classe do alert
    if(novo >= 0 ){
        //alert verde se saldo for maior ou igual a 0
        total.className = "alert "+ " alert-success"
    }else{
        //alert vermelho se saldo menor que 0
        total.className = "alert "+ " alert-danger"
    }

}

function atualizarporc(){
    //vetor com as porcentagens
    var table_despesa = document.getElementsByClassName('porcentagem')
    //vetor com os valores
    var porcentagem_valor = document.getElementsByClassName('porcentagem_valor')
    //calculando a porcentagem total
    var badge =  document.getElementById('badge-despesa')
    badge.innerHTML=(parseFloat(document.getElementById('despesa').textContent.trim()) / parseFloat(document.getElementById('ganho').textContent.trim())  *100).toFixed(2)+"%"
    //atualiza porcentagens da tabela de despesas
    for (var i = 0; i < table_despesa.length; i++) {
        table_despesa[i].innerHTML = (parseFloat(porcentagem_valor[i].textContent.trim()) / parseFloat(document.getElementById('ganho').textContent.trim())  *100).toFixed(2)+"%"
    }


}
