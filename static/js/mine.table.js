
function addtable(time, xq, jymx, syjifen) {
    var itemtr = document.createElement("tr");  // 通过 DOM 创建新元素


    var itemtd1 = document.createElement("td");
    var itemtd2 = document.createElement("td");
    var itemtd3 = document.createElement("td");
    var itemtd4 = document.createElement("td");
    var itemtd1Text = document.createTextNode(time);
    var itemtd2Text = document.createTextNode(xq);
    var itemtd3Text = document.createTextNode(jymx);
    var itemtd4Text = document.createTextNode(syjifen);
    itemtd1.appendChild(itemtd1Text);
    itemtd2.appendChild(itemtd2Text);
    itemtd3.appendChild(itemtd3Text);
    itemtd4.appendChild(itemtd4Text);
    itemtr.appendChild(itemtd1);
    itemtr.appendChild(itemtd2);
    itemtr.appendChild(itemtd3);
    itemtr.appendChild(itemtd4);

    $("#tbody").append(itemtr);

}
$.getJSON("tablelist.json", function (data) {
    for (var i = 0; i < data.length; i++) {
        addtable(data[i].time, data[i].xq, data[i].jymx, data[i].syjifen)
    }
    $("#tablebtn").click(function () {

        addtable($("#input1").val(), $("#input2").val(), $("#input3").val(), $("#input4").val())

    });


//        alert(data[0].name);
});