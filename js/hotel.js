function calcular() {
    var diarias = document.getElementById("diarias").value;
    var taxa;
    var tipo
    if (document.getElementById("a").checked) {
        taxa = 150;
        tipo = "A";
    } else if (document.getElementById("b").checked) {
        taxa = 100;
        tipo = "B";
    } else if (document.getElementById("c").checked) {
        taxa = 75;
        tipo = "C";
    } else if (document.getElementById("d").checked) {
        taxa = 50;
        tipo = "D";
    }
    var totalDiarias = 0; 
    var total = 0;
    var taxaServico = 0;
    var totalGeral = 0;
    totalDiarias = taxa * diarias; 
    var consumo = document.getElementById("consumo").value;
    total = parseFloat(totalDiarias) + parseFloat(consumo);
    taxaServico = total * 0.10;
    totalGeral = total + taxaServico;

    document.getElementById("nomeHospede").innerHTML += document.getElementById("nome").value;
    document.getElementById("tipoApartamento").innerHTML += tipo;
    document.getElementById("numeroDiarias").innerHTML += document.getElementById("diarias").value;
    document.getElementById("valorUnitarioDiaria").innerHTML += taxa;
    document.getElementById("valorTotalDiarias").innerHTML += totalDiarias;
    document.getElementById("valorConsumoInterno").innerHTML += consumo;
    document.getElementById("subtotal").innerHTML += total;
    document.getElementById("valorServico").innerHTML += taxaServico;
    document.getElementById("total").innerHTML += totalGeral;
}
