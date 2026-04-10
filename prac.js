// function add(a,b){
// return a+b;
// }
// var add = function(a,b){
//     return a+b;
// }
// var add = (a,b) => { return a+b; }; //arrow command
// var add = (a,b) => a+b; //if only one statement, we
// var result = add(5,5);
// console.log(result);
// (function(){
//     console.log('Rishabh is great') ;
// })() ;

// function callback(){
//     console.log('adding is executed');
// }

// const add = function(a,b,callback){
//     var res = a+b ;
//     console.log('result is ' + res) ;
//     callback();
// }
// add(3,4,callback) ;

// add(2,3,function(){
//     console.log('add executed') ;
//  });
// var fs = require('fs') ;
// var os = require('os') ;

// var user = os.userInfo() ;
// console.log(user.username) ;

// fs.appendFile('greetings.txt','Rishabh loves his parents'+ '!!\n',()=>{
//     console.log('file is created') ;
// }) ;
// const notes = require("./notes.js");
// var _ = require("lodash");

// console.log("server file is available");
// var age = notes.age;
// var result = notes.addnumber(age + 18, 10);
// console.log(age);
// console.log("Result of the age is:" + result);

// var data = ["person", "person", 1, 2, 1, 2, "name", "age", "2"];
// var filter = _.uniq(data);
// console.log(filter);

// console.log(_.isString("Rishabh"));
// console.log(_.isString(123));

const objectToConver = {
    name : "Rishabh" ,
    age : 22 ,
};
const json = JSON.stringify(objectToConver) ;
console.log(json) ;