const {
  readFile,
  appendFileSync
} = require('fs')

const NumArray = require("./src/numberArray.js")

let inFileX = process.argv[2]
let inFileY = process.argv[3]
let outFile = process.argv[4]

console.log("%s \r\n%s", inFileX, inFileY, outFile)

readFile(inFileX, inFileY, 'utf8', (error, textX, textY) => {
  if (error) {
    throw error
  }

  let dataArrayX = textX.split('\r\n').map(x => Number(x))
  console.log(dataArrayX)

  let dataArrayY = textY.split('\r\n').map(x => Number(x))
  console.log(dataArrayY)

  //let sum = Calc.calcSum(dataArray)
  //console.log(sum)
  for (var i = 0; i < dataArrayX.length; i++) {
    NumArray.addValues(dataArrayX[i], dataArrayY[i])
  }
  var test = NumArray.n()
  console.log(n)

  /*
  for (let x of dataArray) {

    // Synchronously append data to a file
    try {
      appendFileSync(outFile, x + '\r\n')
      console.log('added ', x)
    } catch (err) {
      console.log(err)
    }
  }
  */
  try {
    appendFileSync(outFile, 'sum = ' + sum + '\r\n')
    console.log('sum added ', sum);
  } catch (err) {
    console.log(err)
  }

  
})
