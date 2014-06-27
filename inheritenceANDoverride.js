//run command larry.sayHello();

var createPerson = function(firstName,lastName){
  var person = {
    firstName : firstName,
    lastName : lastName,
    sayHello : function(){
      return "hello there";
    }
  };
  
  Object.defineProperty(person,"fullName",{
   get : function(){ 
        
        return this.firstName + " " + this.lastName;
      },
    enumberable : true,
    configurable : true //lets us override
  });
  
  return person;
};



var createCustomer = function(firstName,lastName,position){
  var person = createPerson(firstName,lastName);
  
  person.position = position;
  
  var fullName = Object.getOwnPropertyDescriptor(person,"fullName");
  
  var fullNameFunction = fullName.get.bind(person);
  
    Object.defineProperty(person,"fullName",{
   get : function(){ 
        
        return fullNameFunction() +  ", " + this.position;
      },
    enumberable : true,
    configurable : true //lets us override
  });
  
   var sayHelloFn = person.sayHello.bind(person);
  
  person.sayHello = function(){
    
    return sayHelloFn() + "My name is " + this.fullName;
  };
  return person;
};

var larry = createCustomer("boris", "jur","manager");



