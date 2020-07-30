// File Reader - Requres two input files and one output file to be speficied

var fs = require('fs')
var dataX = process.argv[2]
var dataY = process.argv[3]
var outFile = process.argv[4]

const numArray = require('./numberArray.js')


try {
    var xData = fs.readFileSync(dataX, 'utf8')
    console.log(xData)
    var xArray = xData.split(/\n/)
    console.log(xArray)
    var yData = fs.readFileSync(dataY, 'utf8')
    console.log(yData)
    var yArray = yData.split(/\n/)
    console.log(yArray)

    console.log(numArray.addValues(1,2))
    //for (var i = 0; i < xArray.length; i++) {
    //  numArray.addValues(xArray[i], yArray[i])
    //}
    //console.log(numArray.xSquared())
} catch(e) {
    console.log('Error:', e.stack)
}
