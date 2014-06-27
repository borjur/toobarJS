var Person = function(firstName,lastName){
  this.firstName = firstName;
    this.lastName = lastName;
};

Object.defineProperties(Person.prototype, {
  sayHi : {
    value : function(){
      return "hi there.";
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

var Employee = function(firstName,lastName, position){
  
  Person.call(this, firstName,lastName);
  
  
  this.position = position;
  
};



var johnDoe = new Employee("john", "doe", "manager");