
function Accumulator(accVal) {
  this.value = accVal;
  
  this.read = function() {
      this.a = +prompt("Введите первое число", 0);
       
       this.value += this.a;
       
  };
  

  
}

var accumulate = new Accumulator(5);

accumulate.read();
accumulate.read();
alert(accumulate.value);

// function Calculator(){
  
//   this.read = function(){
    
//     this.a = +prompt("Введите первое число", 0);
//     this.b = +prompt("Введите второе число", 0);
  
    
//   };
  
//   this.sum = function() {
//     return this.a + this.b;
//   };
  
//     this.mul = function() {
//     return this.a * this.b;
//   }

// }
// var calculator = new Calculator();

// calculator.read();

// alert(calculator.sum());
// alert(calculator.mul());