function nombrefuncion(parametro1,parametro2){
//codigo a ejecutar
}




function multiplicar(num1,num2){
    return num1*num2;
}
var resultado = multiplicar(6,9);
console.log ("el resultado de la multiplicacion es: "+resultado);




function Areacirculo(radio){
    var area = Math.PI * (radio*radio);
    return area;
}
var Areacircle = Areacirculo(5);
console.log = (Areacircle);
alert(Areacircle)





function esPar(numero){
    if(numero%2 == 0){
        return true;
    } else{
        return false
    }
    }
var numero = 50;
if (esPar (numero)){
    alert ("el numero es par");
} else {
    alert("el numero es impar");
}



function determinarSigno(numero2){
    if(numero>0){
        return "el numero es positivo";
    }else if (numero<0){
        return el "numero es negativo";
    } else {
        return "el numero es 0"
    }
    }0
