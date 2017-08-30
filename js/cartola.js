function ordenar() {
    var $table = $('#table');
    $table.bootstrapTable('removeAll');
    var mydata = [];
    var obj1 = {
        "pos": null,
        "nome": document.getElementById("nome1").value,
        "pont": document.getElementById("pontuacao1").value
    };
    var obj2 = {
        "pos": null,
        "nome": document.getElementById("nome2").value,
        "pont": document.getElementById("pontuacao2").value
    };
    var obj3 = {
        "pos": null,
        "nome": document.getElementById("nome3").value,
        "pont": document.getElementById("pontuacao3").value
    };
    var mydata = [obj1, obj2, obj3];
    console.log(mydata);
    function compare(a, b) {
        if (a.pont > b.pont)
            return -1;
        if (a.pont < b.pont)
            return 1;
        return 0;
    }
    mydata.sort(compare);

    mydata[0].pos = '<img onclick="mudar4()" class="card-img-top" width="20" height="20" src="../img/primeiro.jpg">';
    mydata[1].pos = '<img onclick="mudar4()" class="card-img-top" width="20" height="20" src="../img/segundo.png">';
    mydata[2].pos = '<img onclick="mudar4()" class="card-img-top" width="20" height="20" src="../img/terceiro.jpg">';

    $(function () {
        $('#table').bootstrapTable({
            data: mydata
        });
    });
}

function reload() {
    location.reload();
}