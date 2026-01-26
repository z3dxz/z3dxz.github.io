function gen(btn) {
    var fromInput = document.getElementById("from_t");
    var toInput   = document.getElementById("to_t");
    var resultEl  = document.getElementById("result");

    if (!fromInput || !toInput || !resultEl) {
        return;
    }

    var fromVal = parseInt(fromInput.value, 10);
    var toVal   = parseInt(toInput.value, 10);

    if (isNaN(fromVal) || isNaN(toVal)) {
        resultEl.innerHTML = "<b>Invalid input</b>";
        return;
    }

    if (toVal < fromVal) {
        var temp = fromVal;
        fromVal = toVal;
        toVal = temp;
    }

    var rand = Math.floor(Math.random() * (toVal - fromVal + 1)) + fromVal;

    resultEl.innerHTML = "<b>" + rand + "</b>";
}
