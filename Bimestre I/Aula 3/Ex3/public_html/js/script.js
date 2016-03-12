/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function valida() {
    
   
    
    var dia = document.getElementById("dia").value;
    var mes = document.getElementById("mes").value;
    var ano = document.getElementById("ano").value;
    
    if (document.getElementById("nome").value === 'Laura') alert("Supimpa...");
    
    if (!isNaN(parseInt(dia)) && !isNaN(parseInt(mes)) && !isNaN(parseInt(ano))) {
        if (parseInt(mes) > 0 && parseInt(mes) <= 12) {
            if (parseInt(mes) === 1 || parseInt(mes) === 3 || parseInt(mes) === 5 || parseInt(mes) === 7 || parseInt(mes) === 8 || parseInt(mes) === 10 || parseInt(mes) === 12) {
                if (! (parseInt(dia) > 0 && parseInt(dia) <= 31)) alert("Data inválida! 1");
         
            }
            if (parseInt(mes) === 2) {
               if (! (parseInt(dia) > 0 && parseInt(dia) <= 29)) alert("Data inválida!2");
            }
            if (parseInt(mes) === 4 || parseInt(mes) === 6 || parseInt(mes) === 9 || parseInt(mes) === 11) {
                if (! (parseInt(dia) > 0 && parseInt(dia) <= 30)) alert("Data inválida!3");
            }
        } else {
            alert("Data inválida! 4");
        }
    }
    else {
        alert("deu xabum na data...");
    }



    if (cpf.length !== 11)
        alert("CPF incorreto!")
 
    return false;
}
function validaSenha() {
    var senha = document.getElementById("senha").value;
    document.getElementById("senha").style = "background-color: red";
    var number = 0;
    for (var i = 0; i < senha.length; i++) {
        if (!isNaN(parseInt(senha[i]))) {
            //alert("entrou....");
            number++;
        }
    }
    //alert(number);
    if (number === 2) document.getElementById("senha").style = "background-color: green";
    
    
}
function validaEmail() {
     var email = document.getElementById("email").value;
     document.getElementById("email").style = "background-color: red";
     if(email.indexOf("@") > 0) document.getElementById("email").style = "background-color: green";
}
function mascaraCPF() {
    var cpf = document.getElementById("cpf").value;
    if(cpf.length===3) document.getElementById("cpf").value += ".";
    if(cpf.length===7) document.getElementById("cpf").value += ".";
    if(cpf.length===11) document.getElementById("cpf").value += "-";
    
}
