const fs = require('fs');
const process = require('process');


function cat(path){
    try{
        let contents = fs.readFileSync(path, 'utf8');
        return console.log(`file contents are "${contents}"`)
    } catch(error){
      console.error(error);
    }
}

cat(process.argv[2])

module.exports ={
    cat : cat
}