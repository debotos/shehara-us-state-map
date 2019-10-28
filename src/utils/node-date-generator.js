const fs = require('fs')

// Read
const rawInputData = fs.readFileSync(__dirname + '/../data/us-states.json')
const inputData = JSON.parse(rawInputData)

// Arrange Data To The Required Format
const outputData = {}
inputData.features.forEach((x, i) => {
	x.id = `state-${i + 1}`
	outputData[x.properties.name] = x
})

// Write
fs.writeFileSync(__dirname + '/../data/us-states-data.json', JSON.stringify(outputData))
