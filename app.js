document.write("<h1>Bienvenido al Mundo de Zag</h1>");
//tipos de datos
"Hola Zag" //string
'El mundo de ZAG' //string

//dato booleanos
true
false
//array

var usuarios = ['zag','milo','loquiño']
//lista de usuarios

//objeto 
//los objetos se crean entre llaves en javascript
/*
{
    "username":'zag',
    "score":755,
    "pro": true
}*/

//usando console
console.log('esto es una prueba');
console.log([2,3,4]);
//variables 

const PI =3.1415;
console.log(PI);
//las variables deben tener la información correspondiente

var name1="Richi";//variable palabra clave var es su regla

let lastname1="zaga"; 
console.log(name1+' '+lastname1);
//camelcase userName como un camello
//calculo 
let n1=7;
let n2=4;
let result = n1+n2;
//proceso de comparasion
//operadores de comparasion
let result2 = n1 < n2 //false
/*!= comparasion
<=
==*/
//para que salga en consola usamos
console.log(result2);

//con string
let name ='zag2';
let lastname='zaga2';
let completeName= name +' '+ lastname;
console.log(completeName);
//validacion contraseña
let passwordUser='zag123';

let input = 'adfad';
let result3 = input ==passwordUser;
console.log(result3);//en nuestro caso nos daria false 
