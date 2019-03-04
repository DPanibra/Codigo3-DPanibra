
es08_bonoMensual();

function es01_votar(){
    var edad = prompt("Ingrese su edad: ","");
    if(edad>17){
        alert("Ud. SI puede votar en las proximas elecciones");
    }else{
        alert("Ud. NO puede votar en las proximas elecciones");
    }
};
function es02_sueldoSemanal(){
    var pagoHora = prompt("Ingrese su pago por hora: ","");
    var horasTrabajadas = prompt("Ingrese el numero de horas trabajadas: ","");
    var pagoTotal;
    if(horasTrabajadas>40){
        pagoTotal = pagoHora*40+((horasTrabajadas-40)*2*pagoHora);
    }else{
        pagoTotal = pagoHora*horasTrabajadas;
    }
    alert("Su sueldo semanal es de : "+pagoTotal);
};
function es03_regalo(){
    var dinero = prompt("Cuanto dinero tiene Ud.?: ","");

    if(dinero>250){
        alert("Ud. puede comprar un anillo");
    }else if(250>=dinero && dinero>100){
        alert("Ud. puede comprar unas flores");
    }else if(100>=dinero && dinero>11){
        alert("Ud. puede comprar unos chocolates");
    }else{
        alert("Ud. solo puede comprar una targeta");
    }
};
function es04_estacionamiento(){
    var horas = prompt("Ingrese cantidad de horas de estacionamiento: ","");
    var costoTotal;

    if(horas<=2){
        costoTotal = horas*5;
    }else if(2<horas && horas<=5){
        costoTotal = horas*4;
    }else if(5<horas && horas<=10){
        costoTotal = horas*3;
    }else{
        // tambien se pudo poner else if(hora>10){...}
        // pero se sobre entiende que si la hora no entra
        // en las condicionales anteriores, es porque es mayor a 10 
        costoTotal = horas*2;
    }
    alert("Costo total por estacionamiento : "+costoTotal);
};
function es05_menor(){
    var nom1=prompt("Ingrese el nombre de la primera persona: ","");
    var edad1=prompt("Ingrese la edad de "+nom1,"");
    var nom2=prompt("Ingrese el nombre de la segunda persona: ","");
    var edad2=prompt("Ingrese la edad de "+nom2,"");
    var nom3=prompt("Ingrese el nombre de la tercera persona: ","");
    var edad3=prompt("Ingrese la edad de "+nom3,"");

    if(edad1<edad2 && edad1<edad3){
        alert(nom1+" es el menor con "+edad1+" años");
    }else if(edad2<edad3){
        // se endiende que si edad1 no es menor que los dos anteriores
        // entonces es mayor que cualquiera de los dos, por lo tanto no es el menor
        // y solo queda hacer la comparacion entre los dos que quedan
        alert(nom2+" es el menor con "+edad2+" años");
    }else{
        // aqui sigue la misma logica que arriba
        alert(nom3+" es el menor con "+edad3+" años");
    }
};
function es06_costoDescuento(){
    var costo_inicial = prompt("Ingrese el costo del articulo: ","");
    var descuento;
    if(costo_inicial>=200){
        descuento = costo_inicial*(15/100);
    }else if(200>costo_inicial && costo_inicial>=100){
        descuento = costo_inicial*(12/100);
    }else{
        // sigue la misma logica, si no entra en los anteriores
        // es porque es menor a 100
        descuento = costo_inicial*(10/100);
    }
    var costoConDescuento=costo_inicial-descuento;
    alert("Su descuento es de : "+descuento+"$\nSu costo total es de : "+costoConDescuento);
};
function es07_beca(){
    var edad = prompt("Ingrese su edad: ","");
    var promedio = prompt("Ingrese su promedio general: ","");
    var beca;

    if(18<edad){
        if(promedio>=9){
            beca = 2000;
        }else if(9>promedio && promedio>=7.5){
            beca = 1000;
        }else if(7.5>promedio && promedio>=6){
            beca = 500;
        }else{
            beca = 0; 
        }
    }else{
        if(promedio>=9){
            beca = 3000;
        }else if(9>promedio && promedio>=8){
            beca = 2000;
        }else if(8>promedio && promedio>=6){
            beca = 100;
        }else{
            beca = 0;
        }
    }

    if(beca == 0){
        alert("Siga estudiando, mas empeño en sus estudios");
    }else{
    alert("Su beca mesual es de: "+beca+"$"); 
    }
};
function es08_bonoMensual(){
    var sueldo = prompt("Ingrese su sueldo: ","");
    var antiguedad = prompt("Ingrese su antiguedad como empleado de la empresa:","");
    var bonoAntiguedad;
    var bonoSueldo;

    if(2<antiguedad && antiguedad<5){
        bonoAntiguedad = sueldo*(20/100);
    }else if(antiguedad>=5){
        bonoAntiguedad = sueldo*(30/100);
    }
    // ---------------------------
    if(sueldo<=1000){
        bonoSueldo = sueldo*(25/100);
    }else if(1000<sueldo && sueldo<=3500){
        bonoSueldo = sueldo*(15/100);
    }else{
        bonoSueldo = sueldo*(10/100);
    }
    // -----------------------------
    if(bonoAntiguedad>bonoSueldo){
        alert("Se le otorga bono por antigüedad: "+bonoAntiguedad+"$");
    }else{
        alert("Se le otorga bono por sueldo: "+bonoSueldo+"$");
    }
}