
triangulo();
dolares();




function triangulo(){
var base;
var altura;
base=prompt('Ingrese la base del triangulo:','');

altura=prompt('Ingrese la altura del triangulo:','');

var aT=(base*altura)/2;
alert("El area del triangulo es. "+ aT);
};

function dolares(){
    var dolares;
    var soles;
    dolares=prompt("Ingrese la cantida de dolares a convertir. ","");
    soles=dolares*(3.30);
    alert("Cantida en soles:"+soles);
}
