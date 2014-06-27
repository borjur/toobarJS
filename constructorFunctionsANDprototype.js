//use a constructor when you need more than one of the type of object otherwise use object literal
//prototype is only used for constructor functions

var Person = function(firstName,lastName){
  
  this.firstName = firstName;
  this.lastName = lastName;
  


};


Object.defineProperties(Person.prototype, {
  sayHi :{
    value : function(){
      return "hi there!";
    },
    enumerable : true
  },
  fullName : {
       get : function(){
      return this.firstName + " " + this.lastName;
    },
    enumerable : true
  }
});

var johnDoe = new Person("bors", "jur");



/*
Person.prototype.sayHi = function(){
    return " says hello there again";
  };


  Object.defineProperty(Person.prototype, "fullName", {
    
    get : function(){
      return this.firstName + " " + this.lastName;
    },
    enumerable : true
  });*/

// run in command johnDoe.hasOwnProperty("sayHi");



