/** Command-line tool to generate Markov text. */

const markovMachine = require('./markov')
const fs = require('fs');
const process = require('process');
const axios = require('axios');

async function readTxt(file){
    try {
        const data = await fs.promises.readFile(file, 'utf8');
        let mm = new markovMachine.MarkovMachine(data);
        text = mm.makeText();
        console.log(text);
    }
    catch (err) {
        console.error(`Error reading ${file}: ${err}`);
        process.exit(1);
    }
}

async function readWeb(url){
    try {
        const data = await axios.get(url);
        let mm = new markovMachine.MarkovMachine(data.data);
        text = mm.makeText();
        console.log(text);
    }
    catch (err) {
        console.error(`Error accessing ${url}: ${err}`);
        process.exit(1);
    }
}

if (process.argv[2] === 'file'){
    readTxt(process.argv[3]);
}
if (process.argv[2] === 'url'){
    readWeb(process.argv[3]);
}

