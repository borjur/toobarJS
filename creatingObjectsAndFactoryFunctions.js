
var createPerson = function (firstName,lastName){
  //da nismo stavili return it would tell us that 
  // firstName and lastName already exist
return{
      firstName : "dafs",
      lastName : "dafs",
      sayHi : function(){
      return "says hi";
  }
};
  
};

var cevap = createPerson("boris", "jurosevic");



var boris = {
  firstName : "dafs",
  lastName : "dafs",
  sayHi : function(){
    return "says hi";
  }
};

var jurosevic = {
  firstName : "dafs",
  lastName : "dafs",
  sayHi : function(){
    return "says hi";
  }
};


/*
the old way

var person = new Object();

person.firstName = "boirs";
person.lastName = "dafsd";

person.sayHi() = function(){
  return "says hi!"
};*/