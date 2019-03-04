    // condicionales
es04_estacionamiento();

function es21_banco() {
    var saldoActual;
    var pagoMin;
    var pagoNoI;
    var saldoAnterior = prompt("Ingrese su saldo anterior: ","");
    var montoCompras = prompt("Ingrese su monto de compras: ","");
    var pagoDeposito = prompt("Ingrese el pago que depositó en el corte anterior: ","");
    saldoAnterior = parseInt(saldoAnterior);
    montoCompras = parseInt(montoCompras);

    saldoActual=saldoAnterior-montoCompras;
    pagoMin= saldoActual*(15/100);

    if (pagoDeposito==0 || pagoDeposito=="no") {
        pagoNoI = (saldoActual*(85/100))+(montoCompras*(12/100))+200;
    } else {
        pagoNoI = saldoActual*(85/100);
    }
    alert("Saldo Actual: "+saldoActual+"\nPago Minimo: "+pagoMin+"\nPago para no generar intereses: "+pagoNoI);
}
function es20_fabrica() {
    var precioFinal;
    var ganancia;
    var numPantalones = prompt("Ingrese numero de pantalones: ","");
    var modelos = prompt("Ingrese el modelo del pantalon: ","");
    var tallas = prompt("Ingrese la talla del pantalon: ","");

    if (modelos=="a" || modelos=="A") {
        precioFinal =1.5*(80/100);    
    }else if(modelos="b" || modelos=="B"){
        precioFinal =1.8*(95/100);
    }
    if (tallas==32 || tallas==36) {
        precioFinal=precioFinal+(precioFinal*(4/100));
    }

    precioFinal=precioFinal+(precioFinal*(30/100));
    ganancia=(precioFinal*(30/100))*numPantalones;
    alert("Precio final unitario: "+precioFinal+"\nGanancia total: "+ganancia );
};
function es19_vacuna(){
    var edad = prompt("Ingrese la edad del paciente: ","");
    var sexo = prompt("Ingrese el sexo del paciente (M/F): ","");
    var vacuna;
    if (edad>70) {
        vacuna="C";
    } else if(edad<=69 && edad>=16){

        if (sexo=="m" || sexo=="M") {
            vacuna="B";
        }
        else if(sexo=="f" || sexo=="F"){
            vacuna="A";
        }
    }else if(edad<16){
        vacuna="A";
    }
    alert("Tipo de vacuna que se debe aplicar: "+vacuna);
}   
function es18_bonoNavideno(){
    var sueldo = prompt("Ingrese el sueldo del empleado: ","");
    var antiguedad  = prompt("Ingrese la antiguedad del empleado en años: ","");;
    var bono;

    if(sueldo<2000 || antiguedad>4){
        bono = sueldo*(25/100);
    }else{
        bono = sueldo*(20/100);
    }
    alert("El bono del empleado es : "+bono);
};
function es17_paquetes(){
    var sueldo = prompt("Ingrese la cantida de dinero que tiene: ","");
    var paquete;
    if(5000<sueldo){
        paquete = "A";
    }else if(sueldo<5000 && 2000<=sueldo){
        paquete = "B";
    }else if(sueldo<2000 && 1000<=sueldo){
        paquete = "C";
    }else{
        paquete = "D";
    }
    alert("Ustede puede adquirir el paquete: "+paquete);
};
function es16_bonoProfesores(){
    var puntos = prompt("Ingrese puntaje de desempeño:");
    var salario;
    if(puntos>150){
        salario=3;
    }else if(puntos<=150 && 100<puntos){
        salario=2;
    }else if(puntos<=100){
        salario=1;
    }
    alert("Usd. tiene un bono de "+salario+" salarios")
};
function es15_dia(){
    var num = prompt("Ingrese numero (1-7):");
    if(num==1){
        alert("Dia lunes");
    }else if(num==2){
        alert("Dia martes");
    }else if(num==3){
        alert("Dia miercoles");
    }else if(num==4){
        alert("Dia jueves");
    }else if(num==5){
        alert("Dia viernes");
    }else if(num==6){
        alert("Dia sabado");
    }else if(num==7){
        alert("Dia domingo");
    }else{
        alert("Solo numeros del 1-7");
    }  
};
function es14_letra(){
    var num= prompt("Ingrese numero (0-10):");
    if(num==1){
        alert("Calificación : L");
    }else if(num==0){
        alert("Calificación : K");
    }else if(num==1){
        alert("Calificación : J");
    }else if(num==2){
        alert("Calificación : I");
    }else if(num==3){
        alert("Calificación : H");
    }else if(num==4){
        alert("Calificación : G");
    }else if(num==5){
        alert("Calificación : F");
    }else if(num==6){
        alert("Calificación : E");
    }else if(num==7){
        alert("Calificación : D");
    }else if(num==8){
        alert("Calificación : C");
    }else if(num==9){
        alert("Calificación : B");
    }else if(num==10){
        alert("Calificación : A");
    }else{
        alert("Solo numeros del 0-10");
    } 
};
function es13_viaje(){
    var numAlumnos=prompt("Ingre el numero de alumnos que iran de viaje:");
    var costo;
    if(100<numAlumnos){
        costo=numAlumnos*20;
    }else if(numAlumnos<=100 && 50<numAlumnos){
        costo=numAlumnos*35;
    }else if(numAlumnos<=50 && 20<numAlumnos){
        costo=numAlumnos*40;
    }else if(numAlumnos<=20){
        costo=numAlumnos*70;
    }
    alert("Costo total: "+costo);
};
function es12_sueldoSemana(){
    var sueldo= prompt("Ingrese el sueldo:");
    var horas = prompt("Ingrese el numero de horas trabajadas:");
    
    if (horas>50) {
        alert("No esta permitido trabajar mas de 50 horas");
    } else if(50>=horas && horas>=46){
        alert("Sueldo semanal: "+sueldo*3);
    }else if(45>=horas && horas>=41){
        alert("Sueldo semanal: "+sueldo*2);
    }else{
        alert("Sueldo semanal: "+sueldo);
    }
};
function es11_bonoAntiguedad(){
    var antiguedad = prompt("Ingrese años de antiguedad en la empresa: ");
    var bono;
    if(antiguedad>5){
        bono=1000;
    }else if(antiguedad==4){
        bono=400;
    }else if(antiguedad==3){
        bono=300;
    }else if(antiguedad==2){
        bono=200;
    }else if(antiguedad==1){
        bono=100;
    }else{
        bono=bono;
    }
    alert("Su bono es de: "+bono);
};
function es10_laTortuga(){
    var km=prompt("Ingrese cantida de km que tiene:");
    if(km<=1500){
        alert("Puede quedarse en casa");
    }else if(km>1500){
        alert("Puede hacer el viaje de ida y vuelta a México");
    }else if(km>1600){
        alert("Puede hacer el viaje de ida y vuelta a P.V.");
    }else if(km>2400){
        alert("Puede hacer el viaje de ida y vuelta a Acapulco");
    }else if(km>3600){
        alert("Puede hacer el viaje de ida y vuelta a Cancún");
    }
};
function es9_seguros(){
    var plan = prompt("Ingrese el tipo de plan de seguro que tiene (A/B):");
    var monto;
    if(plan=="a" || plan=="A"){
        monto = 1200;
    }else if(plan=="b" || plan=="B"){
        monto = 950;
    }
    var mayor = prompt("Ingrese edad:");
    var alcohol = prompt("Ingiere alcohol?(Y/N):");
    var lentes = prompt("Bebe constantemente alcohol?(Y/N):");
    var enfermedad = prompt("Padece alguna enfermedad?(Y/N):");
    var porcentaje=0;

    if(edad>40){
        porcentaje=porcentaje+20;
    }else{
        porcentaje=porcentaje+10;
    }
    if(enfermedad=="y" || enfermedad=="Y"){
        porcentaje=porcentaje+5;
    }
    if(lentes=="y" || lentes=="Y"){
        porcentaje=porcentaje+5;
    }
    if(alcohol=="y" || alcohol=="Y"){
        porcentaje=porcentaje+10;
    }
    alert("Su cuota total es de: "+(monto-(monto*(porcentaje/100))));
};
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




