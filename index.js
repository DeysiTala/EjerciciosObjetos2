var assert = require("assert");

//Ejercicio 1
var valores = {
  numinicial : 1,
  numfinal : 10,
respuesta : function ()
   {

return valores.respuesta(this.numfinal*(this.numfinal +1)/2);
   }
};


//Ejercicio 4

function Ejercicio4(nombre,apellido,edad,genero,ciudad,pais)
{
	this.nombre=nombre;
	this.apellido=apellido;
	this.edad=edad;
	this.genero=genero;
	this.ciudad=ciudad;
	this.pais=pais;
	this.ficha=function(){
		var respuesta="";
		respuesta+="Nombre: "+ this.nombre + " " + this.apellido +"\n"+"Edad: "+this.edad+"\n"+"País: "+this.pais;
		return respuesta ;
	};
}

//Ejercicio 2
function ChicasLaboratoria(nombre,edad, ocupacion, genero){
  this.nombre = nombre,
  this.edad = edad,
  this.ocupacion = ocupacion,
  this.genero = genero,
  this.superCoder = function(){
    if(this.genero == "Femenino" && (this.edad >=  17) && (this.ocupacion == "Estudiante" || this.ocupacion == "Web Developer"))
      {
        return (this.nombre + " you are awesome");
        }
        else
        {
          return ("Upsiii");
        }
    }

  }

function ChicasLaboratoria2(nombre,edad,ocupacion,genero){
  var chicas = new chicasLaboratoria(nombre,edad,ocupacion,genero);
  return chicas.superCoder();
}



//definiendo la prueba unitaria
describe ("Ejercicio objeto II", function(){
  describe("Ejercicio 1", function(){
    it("Prueba sumados, 1,10",function(){
      assert.equal(55,ejercicio1(1,10)) ;
    });
  });



  describe("Ejercicio 4",function(){
		it("Retornar el nombre, edad y país del paciente",function(){
			var persona = new Ejercicio4("Blanca","Pérez",19,"Femenino","Santiago","Chile");
			assert.equal("Nombre: Blanca Pérez\nEdad: 19\nPaís: Chile",persona.ficha());
		});
	});
});

describe("Ejercicio 2", function(){
    it("Si es una Súper Coder debe retornar el mensaje You're awesome, en caso contrario el mensaje debe ser Upsiii", function(){
        assert.equal("Tamara you are awesome",developer("Tamara",22,"Estudiante","Femenino"));
    });
  });
