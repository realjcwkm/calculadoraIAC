function get2decimals(val) {
    return Number(val.match(/^-?\d+(?:\.\d{0,2})?/)[0]);
}

function buscar_sexo(radioSexo) {
    if (radioSexo[0].checked) {
        return "M";
    } else if (radioSexo[1].checked) {
        return "F";
    } else {
        return null;
    }
}

function calcularIAC() {
    // var radioSexo = document.getElementsByName("tSexo");
    var sexo = document.forms["formCalcIAC"]["tSexo"].value;
    var altura = Number(document.forms["formCalcIAC"]["tAltura"].value);
    var quadril = Number(document.forms["formCalcIAC"]["tQuadril"].value);

    if (sexo == "" || altura == 0 || quadril == 0) {
        alert("Preencha todos os campos com valores válidos");
        return;
    }
    var IAC = (quadril / (altura * Math.sqrt(altura))) - 18;

    IAC = get2decimals(String(IAC));

    var resultado = IAC;

    if (sexo == "M") {
        if (IAC >= 8 && IAC <= 20) {
            resultado += '% (Normal)';
            document.forms["formCalcIAC"]["tResultado"].style.color = "green";
        } else if (IAC >= 21 && IAC <= 25) {
            resultado += '% (Acima do peso)';
            document.forms["formCalcIAC"]["tResultado"].style.color = "yellow";
        } else if (IAC > 25) {
            resultado += '% (Obeso)';
            document.forms["formCalcIAC"]["tResultado"].style.color = "red";
        } else {
            resultado += '% (Abaixo do peso ideal)';
            document.forms["formCalcIAC"]["tResultado"].style.color = "red";
        }
    } else {
        if (IAC >= 21 && IAC <= 32) {
            resultado += '% (Normal)';
            document.forms["formCalcIAC"]["tResultado"].style.color = "green";
        } else if (IAC >= 33 && IAC <= 38) {
            resultado += '% (Acima do peso)';
            document.forms["formCalcIAC"]["tResultado"].style.color = "yellow";
        } else if (IAC > 38) {
            resultado += '% (Obeso)';
            document.forms["formCalcIAC"]["tResultado"].style.color = "red";
        } else {
            resultado += '% (Abaixo do peso ideal)';
            document.forms["formCalcIAC"]["tResultado"].style.color = "red";
        }
    }

    document.forms["formCalcIAC"]["tResultado"].value = resultado;

    //cor azul eh number e preto eh string
}