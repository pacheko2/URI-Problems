var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var names = lines.shift()
var salary = parseFloat(lines.shift())
var comission = parseFloat(lines.shift())
var result = (salary + ((comission/100)*15)).toFixed(2)

console.log("TOTAL = R$ " + result)
