function addition() {
    let first = document.getElementById("first").value;
    first=Number(first);

    let second = document.getElementById("second").value;
    second = Number(second);

    let output = first + second;

    if (output < 0){
        red();
    } else {
        black();
    }

    document.getElementById("output").innerHTML = String(output);
}

function subtract() {
    let first = document.getElementById("first").value;
    first=Number(first);

    let second = document.getElementById("second").value;
    second = Number(second);

    let output = first - second;

    if (output < 0){
        red();
    } else {
        black();
    }

    document.getElementById("output").innerHTML = String(output);
}

function multiply() {
    let first = document.getElementById("first").value;
    first=Number(first);

    let second = document.getElementById("second").value;
    second = Number(second);

    let output = first * second;

    if (output < 0){
        red();
    } else {
        black();
    }

    document.getElementById("output").innerHTML = String(output);
}

function divide() {
    let first = document.getElementById("first").value;
    first=Number(first);

    let second = document.getElementById("second").value;
    second = Number(second);

    let output = first / second;

    if (output < 0){
        red();
    } else {
        black();
    }

    document.getElementById("output").innerHTML = String(output);
}

function power() {
    let first = document.getElementById("first").value;
    first=Number(first);

    let second = document.getElementById("second").value;
    second = Number(second);

    let final = 1;

    for (let i = 1; i <= second; i++) {
        final = final * first;
    }

    if (final < 0){
        red();
    } else {
        black();
    }

    document.getElementById("output").innerHTML = String(final);
}

function clear_it() {
    document.getElementById("first").value = String("");
    document.getElementById("second").value = String("");
    document.getElementById("output").innerHTML = String("");
}

function red(){
    document.getElementById("output").style.color = "red";
}

function black(){
    document.getElementById("output").style.color = "black";
}
