function ordenar() {
    var $table = $('#table');
    var obj1 = {
        "pos": null,
        "nome": document.getElementById("nome1").value,
        "pont": document.getElementById("pontuacao1").value
    }
    var obj2 = {
        "pos": null,
        "nome": document.getElementById("nome2").value,
        "pont": document.getElementById("pontuacao2").value
    }
    var obj3 = {
        "pos": null,
        "nome": document.getElementById("nome3").value,
        "pont": document.getElementById("pontuacao3").value
    }
    var mydata = [obj1, obj2, obj3];

    function compare(a, b) {
        if (a.pont > b.pont)
            return -1;
        if (a.pont < b.pont)
            return 1;
        return 0;
    }
    mydata.sort(compare);

    $(function () {
        $('#table').bootstrapTable({
            data: mydata
        });
    });
}
