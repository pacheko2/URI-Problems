var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var A = parseFloat(lines.shift()).toFixed(1)*3.5
var B = parseFloat(lines.shift()).toFixed(1)*7.5

var media = ((A+B)/11).toFixed(5)

console.log("MEDIA = "+ media)
