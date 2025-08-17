console.log("this is index.js");
fetch("openai.com/api/v1/engines")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
console.log("this is end of index.js");
console.log("This is the end of the file.");
console.log("This is the start of the file.");
console.log("This is a test log message.");
console.log("This is another test log message.");
