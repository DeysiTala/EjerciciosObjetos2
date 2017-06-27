var assert = require("assert");

//Ejercicio 1
var MiObjeto = {
  ni : 1,
  nf : 10,
respuesta : function ()
   {

return MiObjeto.respuesta(this.nf*(this.nf +1)/2);
   }
};








//definiendo la prueba unitaria
describe ("Ejercicio objeto II", function(){
  describe("Ejercicio 1", function(){
    it("Prueba sumados, 1,10",function(){
      assert.equal(10*(10 + 1)/2, respuesta.Miobjeto());
    });
  });
  });
