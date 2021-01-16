const jsonString = `
{
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
}
`;

const resultFromJSON = JSON.parse(jsonString);
resultFromJSON.list[0].age = +resultFromJSON.list[0].age;
resultFromJSON.list[1].age = +resultFromJSON.list[1].age;
console.log("resultFromJSON:", resultFromJSON);
