//assumes that file_read is the text from ocr
const file = require('fs');
let result;
function getDoc() {
    fetch("/api/ocrupload")
}
//write page according to <p> tag
const div = document.getElementById("mainContent");
for (item in result) {
    let temp = document.createElement("p");
    temp.textContent = item;
    div.appendChild(temp);
}


