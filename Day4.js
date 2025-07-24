//an array is a special variable in javascript that can hold multiple values in a single variable
// in js the array is alsoknown as heterogenous 


let number=[1,2,"three",true];

 let names=new Array("itachi","madara");

 console.log(number[2]);
 console.log(names.length);
 filter()->it filtered the result arguments 

 let number=[1,2,3,4,5];
 let result=number.filter(number=> number[0]);
 console.log(result);

 slice->delete the element based on index value
 splice->adding/removing Items at specific index.
 let number=[1,2,3,4,5];
 number.splice(1,2,"itachi");
 console.log(number)

// object

 let anime={
     name:"itachi",
     totalmark:"33",
// nested obj
     subject:{
        dbms:"90",
        java:"97",
    },
     avg() {
         let sum = parseInt(this.subject.dbms) + parseInt(this.subject.java);
         return sum;
     }
    
     }
 console.log(anime["name"]);
 console.log(anime.totalmark);
 console.log(anime.subject.dbms);
 console.log(anime.subject["java"]);
 console.log(anime.avg());

 const person={
    name:"OBITO",
     age:"22",
     city:"HIDDEN LEAF"
 };
 const{name,age,city}=person;
console.log(name);
console.log(age);
console.log(city);

// ARRAY DESTRUTURNING

const person=["ITACHI",24,"SERIGUN"];
const[name,age,designation]=person;
console.log(name+" "+age+" "+designation);
