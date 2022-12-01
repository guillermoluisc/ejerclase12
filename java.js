//hoy clases de objetos 
// Se definen como por ejemplo en una variable
//por lo visto se pueden poner espacios y numeros a las claves (cosa extraña)

// let persona={
// 	nombre:"violeta",
// 	edad:21,
// 	"ciudad Natal":"Buenos Aires",
// 	"1auto":"vW",
// 	saludar:function(){
// 		console.log("hola")
// 	}

// }

//Para acceder a los elementos usando el . es dot notacion 
//ventajas mas comodo, no funciona con espacios y con palabras que empiezan con numero
//con bracket notacion es un string
// tampoco podra hacer uso de por ejemplo persona.nombre y siendo nombre una variable escita desde fuera del objeto
//pero en bracket notacion si ya que le pasa el strin persona[nombre] 
//siendo nombre una variable que almacena el "nombre" nombre
// o sea 
//let Nombre=nombre------- persona[Nombre] va a acceder sin problema al valor de la clase.

// let Nombre="nombre"
// console.log(persona[Nombre])
// let nave ={
// 	tipo_nave:"Espacial",
// 	pais:"Argentina",
// 	cant_tripulantes:2,
// 	tripulantes:["guille","felipe"],
// 	estado:"Usada",
// 	despegar:function(){
// 		console.log("🚀 ¡Todo listo para el despegue! Oh no ... 😱 ¡algo se rompió!");
// 		alert("¡BOOOOOOM!");
// 	}
// }




// function FizzBuzz2 (string1, string2,hasta,fnum,bnum){
//   let n=1
//   let separados =""
// while(n<=hasta){
//   if (n%fnum==0 && n%bnum==0){

//     separados+=""+string1+string2+","  
//   }
//   else if (n%fnum==0){

//     separados+=""+string1+","
//   }
//    else if (n%bnum==0){

//     separados+=""+string2+","
//   }else{
//   	separados+=""+n+","
//   }
//   n++

// }
//   console.log(separados)
// }
// let hasta =prompt("ingrese hasta que número debo contar")
// let fizz_num=prompt("ingrese el primer número")
// let buzz_num=prompt("ingrese el segundo número")
// let palabra1=prompt("ingrese la plabra que remplaza a Fizz")
// let palabra2=prompt("ingrese la plabra que remplaza a Buzz")
// FizzBuzz2(palabra1,palabra2,hasta,fizz_num,buzz_num)

let heroe={
	nombre:"Mario",
	trabajo:"Plomero",
}
//dot
console.log(heroe)
heroe.trabajo="Programador"
heroe["nombre"]="Guillermo"
console.log(heroe)

//primner forma para agregar un nuevo atributo
//por bracket
heroe["edad"]=24
console.log(heroe)
//dot
heroe.amigos=["carlos","pedro"]
console.log(heroe)

//borrar
//dot
delete heroe.amigos;
console.log(heroe)

//bracket
delete heroe["edad"];
console.log(heroe)

// 
// heroe.amigos=["carlos","pedro"]
// console.log(heroe)
// heroe.amigos.push("juan")
// console.log(heroe)

//iterara un objeto
for (let key in heroe){
	console.log(heroe[key])
}