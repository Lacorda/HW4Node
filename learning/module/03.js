let counter  = 0;

module.exports = function(){
  counter += 10;
  this.printNextCount = function()
  {
    console.log(counter);
  }
}

const isEq = (exports === module.exports);

console.log(isEq);