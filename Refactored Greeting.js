function Person(name){
    this.name=name } 
    
    Person.prototype.greet=function(yourname){
      return "Hello " + yourname + ", my name is " + this.name;
    }
    
    class Person{
      constructor(name){
         this.name=name}
      greet(yourName){
      return "Hello " +yourName + ", my name is " + this.name
      }
    }