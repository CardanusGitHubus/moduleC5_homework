const parser = new DOMParser();

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

const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const studentNodesArr = xmlDOM.getElementsByTagName("student");

function GetStudent(studentNode) {
  this.name = studentNode.querySelector("first").textContent + " " + studentNode.querySelector("second").textContent;
  this.age = +studentNode.querySelector("age").textContent;
  this.prof = studentNode.querySelector("prof").textContent;
  this.lang = studentNode.querySelector("name").getAttribute("lang");
}

const resultFromXML = {
  list: [],
};

for (let student of studentNodesArr) {
  let studentObject = new GetStudent(student);
  // console.log(studentObject);
  resultFromXML.list.push(studentObject);
}

console.log("resultFromXML:", resultFromXML);
