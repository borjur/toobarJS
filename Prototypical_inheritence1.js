
var person = {
  
  firstName : "boris",
  lastName : "jur"
};

Object.defineProperty(person, "fullName", {
  
  get : function(){
    return this.firstName + " " + this.lastName;
  }
});

var employee = Object.create(person, {
  sayHi : {
    value: function(){
  return this.__proto__.sayHi.call(this) + "ovo je , " + this.fullName;
},
                             writetable : false,
                             enumerable : true
  }                         
                             
});

//employee.__proto__ === person; in command


person.sayHi = function(){
  return "hello there";
};



/*
var person = {
  
  firstName : "boris",
  lastName : "jur"
};

Object.defineProperty(person, "fullName", {
  
  get : function(){
    return this.firstName + " " + this.lastName;
  }
});

var employee = Object.create(person);

//employee.__proto__ === person; in command


person.sayHi = function(){
  return "hello there";
};
// you use __proto__ to get to the iherited functionality
employee.sayHi = function(){
  return this.__proto__.sayHi.call(this) + "ovo je , " + this.fullName;
};*/