// Assignment HTTP server


const http = require('http')
const fs = require('fs')
const url = require('url')
const path = require('path')

const mimeType = {
  '.html': 'text/html',
  '.js': 'text/javascript'
}

http.createServer(function (request, response) {

  let pathname = url.parse(request.url).pathname
  const ext = path.parse(pathname).ext

  var fileName = pathname.substr(1)
  fs.readFile(fileName, function (err, data) {
    if (err) {
      console.log(err)
      response.writeHead(404, {
        'Content-Type': 'text/html'
      })
      response.end(`File ${pathname} not found!`)
      return
    }
    response.writeHead(200, {
      'Content-Type': mimeType[ext]
    })
    response.write(data)
    response.end()
  })
}).listen(8082)

console.log('Server running at localhost:8082/')
