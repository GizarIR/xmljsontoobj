/*
Напишите код, который будет преобразовывать JSON в dict и выводить его в консоль.
Результат:
{
  list: [
    { name: 'Petr', age: 20, prof: 'mechanic'},
    { name: 'Vova', age: 60, prof: 'pilot'},
  ]
}
*/

const jsonString = `{
    "list": [
     {
      "name": "Petr",
      "age": "20",
      "prof": "mechanic"
     },
     {
      "name": "Vova",
      "age": "60",
      "prof": "pilot"
     }
    ]
   }`;
   
   const result = JSON.parse(jsonString);
   
   console.log(result)