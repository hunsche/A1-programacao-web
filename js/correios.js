function calcular() {
    var peso = document.getElementById("peso").value;
    var valor;
    if (document.getElementById("normal").checked) {
        valor = 2.40;
    } else {
        valor = 7.80;
    }   
    document.getElementById("valor").innerHTML = peso * valor + 'R$';
}
