/*
Задание 6.4.5
Вам дана заготовка и результат, который вы должны получить. 
Напишите код, который будет преобразовывать XML (xmlString) в dict и выводить его в консоль.
{
  list: [
    { name: 'Ivan Ivanov', age: 35, prof: 'teacher', lang: 'en' },
    { name: 'Петр Петров', age: 58, prof: 'driver', lang: 'ru' },
  ]
}
*/

var DOMParser = require('xmldom').DOMParser;


// import {DOMParser} from "https://deno.land/x/deno_dom/deno-dom-wasm.ts";

const parser = new DOMParser();
// console.log('parser' , parser)

const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

function nodejsXMLToDict(xmlStr){
  const xmlDOM = parser.parseFromString(xmlStr, "text/xml");

  const listNode = xmlDOM.getElementsByTagName("student");
  
  let listStudents = []

  for (let i=0; i<listNode.length; i++){
    let Student = {
      "name": listNode[i].getElementsByTagName("name")[0].getElementsByTagName("first")[0].textContent,
      "age": listNode[i].getElementsByTagName("age")[0].textContent,
      "prof": listNode[i].getElementsByTagName("prof")[0].textContent,
      "lang": listNode[i].getElementsByTagName("name")[0].getAttribute("lang"),
    } 
    listStudents[i] = Student;
    // console.log(Student)
  };
  
  const result = {
    list: listStudents
  };
  return result
};

console.log(nodejsXMLToDict(xmlString))


// Version for browser
// function browserXMLtoDict(xmlStr){
//   const xmlDOM = parser.parseFromString(xmlStr, "text/xml");

//   const listNode = xmlDOM.querySelectorAll("student");

//   let listStudents = []

//   for (let i=0; i<listNode.length; i++){
//     let student = {
//       "name": listNode[i].querySelector("name").querySelector("first").textContent,
//       "age": listNode[i].querySelector("age").textContent,
//       "prof": listNode[i].querySelector("prof").textContent,
//       "lang": listNode[i].querySelector("name").getAttribute("lang"),
//     } 
//     listStudents[i] = student;
//     // console.log(student)
//   };

//   const result = {
//     list: listStudents
//   };

//   // console.log(result)
//   return result
// };

// console.log(convertXMLtoDict(xmlString))