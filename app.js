var array = [];
var e = 0;
function budgetx() {

    var budget = document.getElementById("budget").value;
    if (budget == "" || budget<0) {
        alert("Enter valid value")
    }
    else {
        document.getElementById("total-budget").innerText = budget;
        document.getElementById("budget").value = ""
    }

}
function submit() {
    var tbudget = document.getElementById("total-budget");
    var texpenses = document.getElementById("total-expenses");
    var balance = document.getElementById("balance");
    var date = document.getElementById("date").value;
    var total_amount = document.getElementById("total-amount").value;
    var Discription = document.getElementById("Discription").value;
    var select = document.getElementById("select").value;

    if (total_amount == "" || total_amount < 0 || select == "" || Discription == "" || date == "") {
        alert("Please Enter Valid information")
    }

    else {
        e = eval(total_amount) + eval(e);
        var box = document.getElementById("box");
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        box.appendChild(tr);
        tr.appendChild(td1);

        var td2 = document.createElement("td");
        tr.appendChild(td2);
        var td3 = document.createElement("td");
        tr.appendChild(td3);
        var btn = document.createElement("button");
        td3.appendChild(btn);
        td3.id = "removeAmount";
        btn.textContent = "x";
        btn.id = "delete-btn"
        td3.innerHTML = total_amount;
        td2.textContent = Discription;
        td1.innerHTML = select + "<br>" + date;
        btn.onclick = function () {
            e-=total_amount;
            var abc = document.getElementById("removeAmount").innerText;
            var numberValue2 = Number(balance.textContent);
            var numberValue = parseFloat(abc);
            var numberValue3 = Number(texpenses.innerHTML)
            balance.innerText = numberValue2 + numberValue;
            texpenses.innerHTML = (numberValue3) - (numberValue);
            tr.remove();
            array[tr].remove
        }
        tr.appendChild(btn);
        box.appendChild(tr);
        document.getElementById("total-expenses").innerText = e;
        document.getElementById("balance").innerHTML = (tbudget.innerText) - (texpenses.innerText);
        document.getElementById("date").value = "";
        document.getElementById("total-amount").value = "";
        document.getElementById("Discription").value = "";

    }
    
    var obj = {}
    obj.category = select;
    obj.date = date;
    obj.totalAmount = total_amount;
    obj.Discription = Discription;
    array.push(obj)
}
console.log(e)