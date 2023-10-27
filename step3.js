const fs = require('fs');
const process = require('process');
const axios = require('axios');
const {cat} = require('./step1');

function cat(path){
    try{
        let contents = fs.readFileSync(path, 'utf8');
        return console.log(`file contents are "${contents}"`)
    } catch(error){
      console.error(error);
    }
}

async function webCat(url){
try {
let resp = await axios.get(url)
  console.log(resp.data);
} catch(err){
    console.error(`Error fetching ${url}: ${err}`);
    process.exit(1);
}
}

if (path.slice(0, 4) === 'http') {
  webCat(path);
} else {
  cat(path);
}

function handleOutput(text, out) {
    if (out) {
      fs.writeFile(out, text, 'utf8', function(err) {
        if (err) {
          console.error(`Couldn't write ${out}: ${err}`);
          process.exit(1);
        }
      });
    } else {
      console.log(text);
    }
  }

  let path;
let out;

if (process.argv[2] === '--out') {
  out = process.argv[3];
  path = process.argv[4];
} else {
  path = process.argv[2];
}

if (path.slice(0, 4) === 'http') {
  webCat(path, out);
} else {
  cat(path, out);
}