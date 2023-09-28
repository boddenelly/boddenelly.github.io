var Nota = prompt('introduce tu nota');
if (Nota > 0 && Nota <= 10){

    if(Nota < 3){
        alert('insatisfactorio');
    }
    else if(Nota < 5){
        alert('insuficiente');
    }
    else if(Nota < 7){
        alert('Bien');
    }
    else if(Nota = 10){
        alert('excelente');
    }
}