//1
console.log("HELLO WORLD")

//2

var processArgumentsAmount = 0;
var processArgumentsSum = 0;

for (var i in process.argv) {
    
    processArgumentsAmount++;
    if (processArgumentsAmount == 3 || processArgumentsAmount == 4) {
        var arg = Number(process.argv[i])
        processArgumentsSum = arg + processArgumentsSum;
    }
}
console.log(processArgumentsSum);

//3

const fs = require('fs');
const arg2 = process.argv[2];

const buffer = fs.readFileSync(arg2);
const data = buffer.toString();

var lines = data.split("\n").length-1

console.log(lines);


