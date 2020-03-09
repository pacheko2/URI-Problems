var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var lines1 = lines.shift().split(" ")
var lines2 = lines.shift().split(" ")

var peca1 = lines1[0]
var npeca1 = lines1[1]
var valpeca1 = lines1[2]
var peca2 = lines2[0]
var npeca2 = lines2[1]
var valpeca2 = lines2[2]
var result = ((npeca1 * valpeca1)+(npeca2 * valpeca2)).toFixed(2)

console.log("VALOR A PAGAR: R$ " + result.toString())
