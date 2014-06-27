
var createPerson = function(firstName, lastName){
  var person = {};
  //more than one property
  Object.defineProperties(person, {
    
    firstName : {
    value : firstName,
    writeable: true 
     // enumerable : true
  }, 
    
    lastName : {
    value : lastName,
    writeable: true 
       // enumerable : true
  },
    //ovo gore je data properties
  //ovo dole je accessor properties
    fullName: {
      get:function(){ 
        
        return this.firstName + " " + this.lastName;
      },
      
      set:function(value){ 
      this.firstName = value;
      this.lastName = value; }
       // enumerable : true
    }
    
  });
  
  return person;
};

var person = createPerson ("boris", "jur");

//----------------------------------
/*var createPerson = function(firstName, lastName){
  var person = {};
  Object.defineProperty(person, "firstName", {
    
    value : firstName,
    // writeable: true     //false je default
    
  });
  
  
    Object.defineProperty(person, "lastName", {
    
    value : lastName,
    // writeable: true     //false je default
    
  });
  
  return person;
};*/

