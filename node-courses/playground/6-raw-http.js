const https = require('https')

const url = 'https://api.darksky.net/forecast/796b8dd9e1b8fdc56e00c4f98dd51fc2/40,-75?units=si'

const request = https.request(url, (response) => {
    let data = ''
    response.on('data', (chunk) =>{
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', (error) => {
    console.log(error)
})

request.end()