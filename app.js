import "https://www.puck-js.com/puck.js";

function writeFile(name, content) {
  Puck.write(`require('Storage').write('${name}',atob("${btoa(content)}"));\n`);
}

document.getElementById("test").addEventListener("click", () => {
  writeFile("example.json", "hello world!");
});
