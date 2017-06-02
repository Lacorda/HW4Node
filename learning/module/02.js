let counter  = 0;

exports.printNextCount = function (){
  counter += 2;
  console.log(counter);
};

const isEq = (exports === module.exports);

console.log(isEq);