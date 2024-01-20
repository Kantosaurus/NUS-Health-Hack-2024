//assumes that file_read is the text from ocr
const file = require('fs');
let result;
fs.readFile("ocr.txt", (err, output) => {
    if (err) throw err;
    result = output.toString().split('\n');
});
//write page according to <p> tag
const div = document.getElementById("mainContent");
for (item in result) {
    let temp = document.createElement("p");
    temp.textContent = item;
    div.appendChild(temp);
}


