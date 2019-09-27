const fs = require('fs')
// const book = {
//     title: 'Harry Potter',
//     author: 'J. K. Rowling'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
console.log(data)
data.name = 'Ramon'
data.age = 28
console.log(data)
const newInfoJSON = JSON.stringify(data)
fs.writeFileSync('1-json.json', newInfoJSON)
