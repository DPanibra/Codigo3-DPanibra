pElectrica();

function triangulo(){
    var base;
    var altura;
    base=prompt('Ingrese la base del triangulo:','');
    altura=prompt('Ingrese la altura del triangulo:','');
    var aT=(base*altura)/2;
    alert("El area del triangulo es: "+ aT);
};

function dolares(){
    var dolares;
    var soles;
    dolares=prompt("Ingrese la cantida de dolares a convertir. ","");
    soles=dolares*(3.30);
    alert("Cantida en soles: "+soles);
};

function edad(){
    var aNacimiento;
    aNacimiento = prompt('Ingrese el año de nacimiento:','kjsdnjdsajdsa');
    var edad = (2019-aNacimiento);
    alert("Usted tiene: "+edad+" años");
};
function estacionamiento(){
    var tiempo=prompt("Costo por hora (3$)\nIngrese el tiempo que se estacionara: ","");
    tiempo = parseInt(tiempo);
    var no=tiempo%5;
    alert("Costo por estacionamiento : "+ no);
};

function precio(){
    var precio;
    precio = prompt("Ingrese costo de la compra:","");
    var descuento = precio-((20/100)*precio);
    var iva = descuento +((15/100)*descuento);
    alert("Precio con 20% de descuento: "+descuento+"$\nPrecio total con IVA: "+iva+"$");
};

function ahorro(){
    var sueldo = prompt("Ingrese su sueldo mensual:","");
    var ahorro = ((15/100)*sueldo)*12;
    alert("Ahorro anual: "+ahorro+"$");
};

function cheque(){
    var dias = prompt("Ingrese el numero de dias del viaje: ","");
    var hotel = prompt("Ingrese precio del hotel por dia: ","");
    var comida = prompt("Ingrese precio de la comida por dia: ","");
    hotel=parseInt(hotel);
    comida=parseInt(comida);
    var costoD = 100;
    var cheque = (hotel+comida+costoD)*dias;
    alert("Monto total del cheque: "+cheque+"$");
};

function pElectrica(){
    var volt = prompt("Ingrese la cantida de voltaje en el circuito: ","");
    volt = parseInt(volt);
    var inten = volt/4;
    var potencia = volt*inten;
    alert("La potencia electrica de su circuito es de: "+potencia+"watts");
};

function segundaMatricula(){
    var nota1 = prompt("Promedio de 3 examenes:\nIngrese la nota del primer examen (25%): ","");
    var nota2 = prompt("Ingrese la nota del segundo examen (25%): ","");
    var nota3 = prompt("Ingrese la nota del tercer examen (50%): ","");
    nota1 = parseInt(nota1);
    nota2 = parseInt(nota2);
    nota3 = parseInt(nota3);
    nota1 = (nota1*(25/100));
    nota2 = (nota2*(25/100));
    nota3 = (nota3*(50/100));
    alert("Primera nota: "+nota1+"\nSegunda nota: "+nota2+"\nTercera nota: "+nota3+"\nPromedio Final: "+(nota1+nota2+nota3));
};










