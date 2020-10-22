/* averiguar si una palabra es capicua
ejemplo 'ana' es 
ejemplo 'neuquen' es
ejemplo ' paseo' no es  
 
const a = 'neuquen' 
const longitud = a.length;  // 7  
indice 0 -> a.charAt(0) == a.charAt(6) -> true y sigo // 6 = longitud - 1 - 0 
indice 1 -> a.charAt(1) == a.charAt(5) -> true y sigo // 5 = longitud - 1 - 1  
indice 2 -> a.charAt(2) == a.charAt(4) -> true y sigo // 4 = longitud - 1 - indice 



*/
function capicua(palabra){
    let mitad= Math.trunc(palabra.length/2); 
    let hipotesis= true; 
    for (let i=0; i<mitad; i++){  
        if(palabra.charAt(i) != palabra.charAt(palabra.length - 1 - i)){
            hipotesis = false;
            break;
        }
    }    
    if (hipotesis){
        console.log(palabra + ' es capicua')
    }   else {
        console.log(palabra + ' NO es capicua')
    }
}
/*24. Diseñe un programa que averigüe si un número M es perfecto o no. 
Sabiendo que un
número es perfecto cuando es entero, positivo y la suma de todos sus divisores, salvo él
mismo, es igual al mismo número. Por ejemplo: 6 es dividido de manera exacta por 1, 2 y 3
que al sumarlos da el valor origina: 6.

Un numero es divisor de otro numero cuando el resto de la division es cero ejemplo 
6%2 == 0
6%4 != 0

averiguar si es entero, positivo // listo 
console.log(numero  + ' es entero, positivo  ') 
console.log(numero  + ' NO es entero ni positivo  ')

cuales son divisores excepto el mismo número
y hay que acumularlos al 1,2,3 que pasaron el filtro  */
/*-------------- con FOR --------------------------------*/     
function esPerfectoFor(numero){
    if (Number.isInteger(numero) && (Math.sign(numero) === 1) ){
        console.log(numero  + ' Es entero y positivo. ') 
    } else { 
        console.log(numero  + ' NO es entero ó no es positivo ') 
    }
    let divisores = ''; 
    let acumulador = 0; 
    for (let i=1; i<numero; i++ ) {
        if(numero%i == 0) {
            divisores = divisores + ' ' + i;
            acumulador = acumulador + i; 
        }     
    }
    if (acumulador == numero ) {
        console.log('Es perfecto y sus divisores son: ' + divisores)  
    } else {
        console.log('No es perfecto') 
    } 
}
//-----------------con WHILE  ---------------------------//
function esPerfectoWhile(numero){
    if (Number.isInteger(numero) && (Math.sign(numero) === 1) ){
        console.log(numero  + ' Es entero y positivo. ') 
    }   else{ 
        console.log(numero  + ' NO es entero ó no es positivo ') 
        
    }
    let divisores = ''; 
    let counter = 1;
    let acumulador = 0; 
    while (counter < numero ){
        if(numero%counter == 0){
            divisores = divisores + ' ' + counter;
            acumulador = acumulador + counter; 
        }         
    counter++;            
    } 
    if (acumulador == numero ) {
        console.log('Es perfecto y sus divisores son: ' + divisores)  
    } else {
        console.log('No es perfecto') 
    } 
}
/*De mi guía de programación:  63,  89, 92, 99 */ 
/* 63 - Los Números de Fibonacci están formados por la siguiente sucesión: 0, 1, 1, 2, 3, 5, 8, 13, 21, ….
Luego de que defina la ley de formación de esta serie, escriba un programa que presente en
pantalla el n-simo valor de esta serie, donde n es un dato dado por el usuario, debe verificar
cual es el valor máximo que puede ser empleado en el computador.*/ 

function fibo(numero) {
    let numero1 = 0;
    let numero2 = 1;
    let numeroFibo = 0;
    for (let i = 0; i < numero; i++) {
        numeroFibo= numero1 + numero2 // 1 = 0 + 1
        console.log(numeroFibo)
        numero1 = numero2
        numero2 = numeroFibo
    }
} 
/*89. Dado un arreglo lineal A de N componentes, diseñe un proceso donde sea “eliminado” un
valor seleccionado por el usuario. Debe entenderse por “eliminar” que se debe obtener que
el arreglo A ahora sea de N-1 componentes.*/
function ochentaynueve(arreglo,indice) {
    console.log(arreglo,indice) // parametros de entrada 
    arreglo.splice([indice],1) // Elimina 1 elemento desde el índice indicado por partametro 
    console.log(arreglo)       // resultado     
}
/*92. Dado un arreglo lineal A de N componentes y un vector B de M componentes, obtener un
tercer vector C que posea sólo los elementos comunes entre los vectores A y B. El resultado
no debe presentar valores repetidos.*/
function noventaydos(arreglo1,arreglo2) {
    console.log(arreglo1,arreglo2) // parametros de entrada 
    let arregloLargo = arreglo1
    let arregloCorto = arreglo2
    if ( arreglo1.length < arreglo2.length ) {
        arregloCorto = arreglo1; 
        arregloLargo = arreglo2;    
    }
    let arregloSalida = []; 

    for (let ronda=0; ronda < arregloCorto.length; ronda++) {
        for (let ciclo=0; ciclo < arregloLargo.length; ciclo++) {
            if (arregloLargo[ciclo] === arregloCorto[ronda]) {
                arregloSalida.push(arregloCorto[ronda])
                ordenar(arregloSalida) // problemario.js:138 (13) [0, 0, 1, 1, 1, 1, 1, 1, 2, 3, 3, 3, 3]
                //sacarRepetidos(arregloSalida)
            }    
        }
    }    
console.log(arregloSalida)    
}
 

function ordenar(arregloSalida){
    for (let ronda=0; ronda < arregloSalida.length; ronda++) {        
        for (let ciclo=0; ciclo < arregloSalida.length-1; ciclo++) {        
            if (arregloSalida[ciclo] > arregloSalida[ciclo+1]) {
                let auxiliar = arregloSalida[ciclo];
                arregloSalida[ciclo] = arregloSalida[ciclo + 1];
                arregloSalida[ciclo + 1] = auxiliar;
            }    
        } 
    }     
}


function sacarRepetidos(arregloSalida){ 
    console.log(arregloSalida)
    for (let i=0; i < arregloSalida.length; i++) { 
        for (let j=0; j < arregloSalida.length-1; j++) { 
            if (arregloSalida[j] === arregloSalida[j+1] ) { 
                arregloSalida.shift(j)    
            }    
        }      
    }    
}
 
    /*
 */

 
 
/*
[0,1,0,1,2,1,3,'a'],[1, 0, 2, 3, 1, 5]
linea 135 = [1, 1, 1, 0, 0, 2, 3, 1, 1, 1]
acomodar de manera ascendente 
sacar los repetidos 
deberia quedar asi 
[0,1,2,3] 

ronda 0    
ciclo   posicion  accion                    resultado
                                            0  1  2  3  4  5  6  7  8  9

0       0-1       si 1=1    -               1, 1, 1, 0, 0, 2, 3, 1, 1, 1
1       1-2       si 1=1                    1, 1, 1, 0, 0, 2, 3, 1, 1, 1
2       2-3       si 1>0    intercambio ->  1, 1, 0, 1, 0, 2, 3, 1, 1, 1
3       3-4       si 1>0    intercambio ->  1, 1, 0, 0, 1, 2, 3, 1, 1, 1        
4       4-5       si 1<2    nada        ->  1, 1, 0, 0, 1, 2, 3, 1, 1, 1  
5       5-6       si 2<3    nada        ->  1, 1, 0, 0, 1, 2, 3, 1, 1, 1   
6       6-7       si 3>1    intercambio ->  1, 1, 0, 0, 1, 2, 1, 3, 1, 1
7       7-8       si 3>1    intercambio ->  1, 1, 0, 0, 1, 2, 1, 1, 3, 1 
8       8-9       si 3>1    intercambio ->  1, 1, 0, 0, 1, 2, 1, 1, 1, 3 

ronda 1    
ciclo   posicion  accion                    resultado
                                            0  1  2  3  4  5  6  7  8  9

0       0-1       si 1=1    -               1, 1, 0, 0, 1, 2, 1, 1, 1, 3 
1       1-2       si 1>0    intercambio ->  1, 0, 1, 0, 1, 2, 1, 1, 1, 3                
2       2-3       si 1>0    intercambio ->  1, 0, 0, 1, 1, 2, 1, 1, 1, 3  
3       3-4       si 1=1    nada            1, 0, 0, 1, 1, 2, 1, 1, 1, 3 
4       4-5       si 1<2    nada        ->  1, 0, 0, 1, 1, 2, 1, 1, 1, 3   
5       5-6       si 2>1    intercambio ->  1, 0, 0, 1, 1, 1, 2, 1, 1, 3  
6       6-7       si 2>1    intercambio ->  1, 0, 0, 1, 1, 1, 1, 2, 1, 3 
7       7-8       si 2>1    intercambio ->  1, 0, 0, 1, 1, 1, 1, 1, 2, 3 

ronda 2   
ciclo   posicion  accion                    resultado
                                            0  1  2  3  4  5  6  7  8  9

0       0-1       si 1>0    intercambio     0, 1, 0, 1, 1, 1, 1, 1, 2, 3
1       1-2       si 1>0    intercambio ->  1, 0, 1, 0, 1, 2, 1, 1, 1, 3                
2       2-3       si 1>0    intercambio ->  1, 0, 0, 1, 1, 2, 1, 1, 1, 3  
3       3-4       si 1=1    nada            1, 0, 0, 1, 1, 2, 1, 1, 1, 3 
4       4-5       si 1<2    nada        ->  1, 0, 0, 1, 1, 2, 1, 1, 1, 3   
5       5-6       si 2>1    intercambio ->  1, 0, 0, 1, 1, 1, 2, 1, 1, 3  
6       6-7       si 2>1    intercambio ->  1, 0, 0, 1, 1, 1, 1, 2, 1, 3 

ronda 3   
ciclo   posicion  accion                    resultado
                                            0  1  2  3  4  5  6  7  8  9

0       0-1       si 1=1    -               1, 1, 0, 0, 1, 2, 1, 1, 1, 3 
1       1-2       si 1>0    intercambio ->  1, 0, 1, 0, 1, 2, 1, 1, 1, 3                
2       2-3       si 1>0    intercambio ->  1, 0, 0, 1, 1, 2, 1, 1, 1, 3  
3       3-4       si 1=1    nada            1, 0, 0, 1, 1, 2, 1, 1, 1, 3 
4       4-5       si 1<2    nada        ->  1, 0, 0, 1, 1, 2, 1, 1, 1, 3   
5       5-6       si 2>1    intercambio ->  1, 0, 0, 1, 1, 1, 2, 1, 1, 3  

ronda 4   
ciclo   posicion  accion                    resultado
                                            0  1  2  3  4  5  6  7  8  9

0       0-1       si 1=1    -               1, 1, 0, 0, 1, 2, 1, 1, 1, 3 
1       1-2       si 1>0    intercambio ->  1, 0, 1, 0, 1, 2, 1, 1, 1, 3                
2       2-3       si 1>0    intercambio ->  1, 0, 0, 1, 1, 2, 1, 1, 1, 3  
3       3-4       si 1=1    nada            1, 0, 0, 1, 1, 2, 1, 1, 1, 3 
4       4-5       si 1<2    nada        ->  1, 0, 0, 1, 1, 2, 1, 1, 1, 3   

ronda 5   
ciclo   posicion  accion                    resultado
                                            0  1  2  3  4  5  6  7  8  9

0       0-1       si 1=1    -               1, 1, 0, 0, 1, 2, 1, 1, 1, 3 
1       1-2       si 1>0    intercambio ->  1, 0, 1, 0, 1, 2, 1, 1, 1, 3                
2       2-3       si 1>0    intercambio ->  1, 0, 0, 1, 1, 2, 1, 1, 1, 3  
3       3-4       si 1=1    nada            1, 0, 0, 1, 1, 2, 1, 1, 1, 3 

ronda 6   
ciclo   posicion  accion                    resultado
                                            0  1  2  3  4  5  6  7  8  9

0       0-1       si 1=1    -               1, 1, 0, 0, 1, 2, 1, 1, 1, 3 
1       1-2       si 1>0    intercambio ->  1, 0, 1, 0, 1, 2, 1, 1, 1, 3                
2       2-3       si 1>0    intercambio ->  1, 0, 0, 1, 1, 2, 1, 1, 1, 3  

ronda 7   
ciclo   posicion  accion                    resultado
                                            0  1  2  3  4  5  6  7  8  9

0       0-1       si 1=1    -               1, 1, 0, 0, 1, 2, 1, 1, 1, 3 
1       1-2       si 1>0    intercambio ->  1, 0, 1, 0, 1, 2, 1, 1, 1, 3                

ronda 8   
ciclo   posicion  accion                    resultado
                                            0  1  2  3  4  5  6  7  8  9

0       0-1       si 1=1    -               1, 1, 0, 0, 1, 2, 1, 1, 1, 3 



*/
    
/*99. Se tiene un conjunto de N valores reales (que pueden ser almacenados en un arreglo lineal)
y un intervalo [A, B]. Realizar un programa que determine el promedio de aquellos valores
mayores que A y menores que B.*/
function promedio(arreglo,valorA,valorB) {
    console.log(arreglo,valorA,valorB)  // esto para el caso que en valor a se ponga el mayor en cez del menor
    let mayor= valorB; 
    let menor= valorA; 
    if(valorB < valorA) {
        mayor= valorA;
        menor= valorB 
    }
    arreglo.sort(function(a, b) {     // ordenar de menor a mayor
        return a - b;
    });
    var indexadoMenor = arreglo.indexOf(menor)    // averigua indice del valorA 
    var indexadoMayor = arreglo.indexOf(mayor)  // averigua indice del valorB
    var sliced = arreglo.slice(indexadoMenor,indexadoMayor+1)   // crea  nuevo arreglo segmento valorA -> valorB
    var cantidadIndices = sliced.length   // averigua cantidad de indices
    const reducer = (accumulator, currentValue) => accumulator + currentValue;  
    console.log(sliced.reduce(reducer)/cantidadIndices);         // suma y promedia
}
/* 88. Realice un programa que ordene de menor a mayor un arreglo unidimensional A de N
componentes.*/ 
function menorMayor(arreglo) {
    console.log(arreglo)   
    arreglo.sort(function(a, b){return a - b}); // como se separan numeros y letras/srings de un array ???
    console.log(arreglo)         
}
/*90. Dado un vector A de N componentes y un vector B de M componentes, obtener un tercer
vector C que sea la unión de los vectores A y B. El resultado no debe presentar valores
repetidos.*/ 
function noventa(arregloA,arregloB) {
    console.log(arregloA,arregloB) // parametros de entrada 
    let longitud= arregloA.length; // para iterar desde el arreglo mas largo 
        if(arregloB.length > arregloA.length) {
        longitud= arregloB.length; 
        }
    let arregloC=[];                //  arreglo temporal para alojar todos los valores de arreglos de entrada 
    let arregloD=[];                //  arreglo final 
    for (let i=0; i<longitud; i++){
        arregloC.push(arregloA[i],arregloB[i])      // junta ambos arreglos de entrada en C 
        arregloC = arregloC.filter(function(dato){  // metodo filter saca los valores UNDEFINED 
            return dato != undefined
        });
        arregloD = [...new Set(arregloC)];          // metodo SET compara valores del arreglo y solo pone los iguales en el arreglo D    
    }   
    console.log(arregloD)       // resultado     
}
/*91. Dado un arreglo unidimensional de N posiciones ordene los elementos de las posiciones
pares de menor a mayor y los elementos de las posiciones impares de mayor a menor. El
resultado debe ser dado en el mismo vector original y considere como limitante no poder
emplear vectores auxiliares.*/
function paresImpares(arreglo){ 
    console.log(arreglo); 
    arreglo.sort(function(a, b) {return a - b;});
    let pares =[]   //  como hacer para no usar array auxiliar ???
    for (var i=0; i<arreglo.length; i++){ 
        if (arreglo[i]%2 == 0) {
            pares.push(arreglo[i]) 
        }
    }    
    arreglo.sort(function(a, b) {return b - a;});   
    for (var i=0; i<arreglo.length; i++){ 
        if (arreglo[i]%2 != 0) {
            pares.push(arreglo[i]) 
        } 
    } 
    arreglo = pares 
    console.log(arreglo)
}
/*94. Inserte un valor dado como dato en la posición que le corresponde dentro de un arreglo A
de N componentes, el cual está ordenado de menor a mayor, así que el nuevo valor debe ser
ubicado en una posición de tal manera que no rompa dicho orden.*/
function insertar(numero){ 
    let arreglo = [0, 4, 6, 8, 10, 15, 20, 22, 27, 30]
    arreglo.push(numero)    // hay otra manera de insertar sn push y ordenar luego ? 
    arreglo.sort(function(a, b) {return a - b;});
    console.log(arreglo)
}
/*96. Diseñe una rutina que dado un vector A de N posiciones genere un resultado True si el
mismo está ordenado y False en caso contrario. Considere que el ordenamiento puede ser
de mayor a menor o de menor a mayor y que pueden existir elementos repetidos.*/
/*97. Realice una rutina que devuelva la primera posición del primer elemento que se repita
dentro de un arreglo lineal de N posiciones.


98. La mediana de un arreglo ordenado de números se puede definir así:
• Para un número impar de elementos, la mediana es el valor que ocupa la casilla central.
• Para un número par de elementos, es el promedio de los valores que se hallan en las
casillas adyacentes a la mitad.
Ejemplo:
Para un número impar de elementos (N =5)
2 5 6 8 9
Mediana = 6 (elemento que ocupa la casilla 3)
Para un número par de elementos (N =6)
2 5 6 8 9 12
Mediana = 7 (promedio de los valores que ocupan las casillas 3 y 4)
Construya un programa que realice lo siguiente:
• Lea N valores y los almacene en un arreglo unidimensional.
• Ordene el arreglo en orden creciente.
• Calcule la mediana de los valores contenidos en el arreglo.

100. Dado el arreglo lineal A con N elementos, diseñe un programa para construir otro arreglo
lineal P que contenga todos los elementos de A que sean números primos.*/
function esPrimo(arreglo){
console.log(arreglo)  
let impares = []  
let divisores = 1
let primos = []; 


    for (let i=0; i<arreglo.length; i++) { 
        if ( arreglo[i]%arreglo[i] == 0 )  {
            primos.push(arreglo[i])
        }
    }    
console.log(primos)
} 


/*101. Genere un programa permita al usuario elegir una de dos posibles operaciones, convertir un
número en base diez a su equivalente en binario o, convertir un número binario a su
equivalente en base diez.

102. Dado un arreglo unidimensional de K elementos numéricos y una variable cualquiera Y.
Determine si existe algún elemento del arreglo que sea igual a Y. De ser así, presentar en
qué posición o posiciones se da esta situación.

103. El calendario Gregoriano es el que más conocemos y usualmente empleamos, en este
tenemos los meses que contienen una determinada cantidad de días, el calendario Juliano no
posee meses y solamente se contabilizan los días en secuencia, esto es que el día 15 de
Enero es el día 15 en el calendario Juliano, el día 10 de Febrero será el día 41 y así
sucesivamente. Realice un programa que dado un día y mes del calendario Gregoriano
calcule su equivalente en el Juliano, y viceversa.
104. Escribir un programa que a partir de un vector A de N elementos, se construya otro arreglo
B donde cada elemento B[i] contenga la posición que ocuparía el elemento A[i] si estuviera
ordenado en forma creciente. Por ejemplo:
14 8 3 2 15 12 7 Vector Original - A
6 4 2 1 7 5 3 Vector Resultante - B
105. Escribir una rutina que dado un vector de N posiciones ordene de mayor a menor los
valores (NO las posiciones) pares y de menor a mayor los valores (nuevamente NO las
posiciones) impares. El resultado se debe guardar en el mismo vector, manteniendo las
posiciones que tenían los valores pares con valores pares y las impares con las impares.*/
/*106. Realice un programa que determine cuantos billetes y monedas de cada denominación se
deben emplear para cambiarle el cheque a un cliente, de tal manera que el número de
billetes y monedas de circulación legal sea el mínimo posible. No tome en cuenta los
centavos. La cantidad debe ser verificada no pudiendo ser negativa, poseer valores
decimales o exceder el monto de 5.000.000, en cualquiera de los casos se debe dar un
mensaje adecuado al usuario. El resultado debe ser dado en forma que se muestre la
denominación del billete o moneda y la cantidad requerida del mismo, aquellos billetes o
monedas que no sean necesarios no deben ser mostrados.*/

 
    

/*   let cienes = 0
    let billeteQuin = 500
    let quini = 0
    let billeteMil = 1000
    let miles = 0
    let monedaUn = 1
    let uno = 0
    let monedaCinco = 5     
    let cinco = 0
    let billeteDiez = 10
    let diez = 0
    let billeteVeinte = 20 
    let veinte = 0
    let billeteCincuenta = 50 
    let cincu = 0
    let billeteCien= 100

 
uno = i/monedaUn 

        if (monto%billeteMil === 0) {miles = monto/billeteMil } 
        else if (monto%billeteQuin == 0) {quini = monto/billeteQuin }
        else if (monto%billeteCien == 0) {cienes = monto/billeteCien }
        else if (monto%billeteCincuenta == 0) {cincu = monto/billeteCincuenta }
        else if (monto%billeteVeinte == 0) {veinte = monto/billeteVeinte }
        else if (monto%billeteDiez == 0) {diez = monto/billeteDiez }
        else if (monto%monedaCinco == 0) {cinco = monto/monedaCinco }

        
    console.log('entregar ' +  miles + ' de mil ' + quini + ' de quinientos' + cienes + ' de cien' + cincu + ' de cincuenta' + veinte + ' de veinte ' + diez + ' de diez' + cinco + ' de cinco' + uno + ' de uno')    
*/

/*107. Aunque Ud. No lo crea existen actualmente muchas personas tan acostumbradas al uso del
computador que se vuelven un lío en el momento que deben escribir una cantidad en letras
para un cheque. Genere un programa que dada una cifra, ingresada por el usuario en
números, sea generada en palabras. El programa debe ser realizado para cifras de no más de
nueve (9) dígitos y trabajaremos sin centavos (obviamente estos elementos deben ser
validados adecuadamente).
108. Diseñe una función que verifique si un arreglo lineal A de orden N es simétrico y que
devuelva el valor uno (1) en caso afirmativo y el valor cero (0) en caso negativo. Un vector
es simétrico si se cumple, en todos los casos, que el primer elemento es igual al último, el
segundo al penúltimo, el tercero al antepenúltimo, y así sucesivamente.

arreglar el 92
hacer 96, 
100 - una funcion que determine numero primo - 
102 
106 

spa / pwa view react angular 
json 
key value 


*/
