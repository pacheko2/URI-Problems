var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var n = 3.14159;
var R = parseFloat(lines.shift());
var A = n * Math.pow(R,2);
var format = A.toFixed(4);

console.log("A=" + format);
