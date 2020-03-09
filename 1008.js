var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var func = lines.shift()
var hour = parseInt(lines.shift())
var salary = parseFloat(lines.shift())

var salaryf = (salary * hour).toFixed(2)

console.log("NUMBER = " + func + "\nSALARY = U$ " + salaryf)
