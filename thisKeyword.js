



var makeRequest = function(url, callback){
  //make request with the provided url
  
  var data = 10; //json text xml
  
  callback(data);
};

var obj = {
  someValue : 20,
  loadData: function(data){
    
    var sum = this.someValue + data;
    alert(sum);
  },
  
  prepareRequest : function (){
    
  var url = "http://numberservice.com";
    
              //instead of obj.loadData
  makeRequest(url, this.loadData.bind(this));
}
};

//put this in console    obj.prepareRequest();



//--------------------------------------------------

window.name = "boris jur";  


var globalGreet =  function(){
    return "says hi " + this.name; //this object
  };

var johnDoe = {
  name: "boris jur",
  greet: globalGreet  //gives us different result if we paste the whole code ==> window.globalGreet.bind(window)
  };

//--------------------------------------------------
//global variable/function


var name = "boris jur";   // or window.name


var greet =  function(){
    return "says hi " + this.name; //this object
  };
  
  

//--------------------------------------------------

/*
//this works
var borJur = {
  name: "boris jur",
  greet: function(){
    return "says hi " + this.name; //this object
  }
  
};*/

//if we do this we will get an error
/*var borJur = {
  name: "boris jur",
  greet: function(){
    return "says hi" + person.name;
  }
};*/

/*var person = {
  name: "boris jur",
  greet: function(){
    return "says hi" + person.name;
  }
};*/