import { readFile } from 'fs/promises'; // Notice we're importing from 'fs/promises'

async function readAndParseFile() {
  try {
    const output = await readFile("C:/Users/aeaion/Downloads/keywords.csv");
    const result = output.toString().split('~');
    console.log(result);
    console.log(result[0].replaceAll('"', '').replaceAll("'",''));
    console.log(result[1].replaceAll('"', '').replaceAll("'",''));

    return result;
  } catch (err) {
    console.error('Error reading the file:', err);
  }
}

readAndParseFile();


//<button>
//alternate every 2 entries to get the keyword and the meaning 
//inserts 