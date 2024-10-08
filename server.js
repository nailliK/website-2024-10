import http from 'http'
import finalhandler from 'finalhandler'
import serveStatic from "serve-static";

// Serve up public/ftp folder
var serve = serveStatic('dist/', {index: ['index.html', 'index.htm']})

// Create server
var server = http.createServer(function onRequest(req, res) {
    serve(req, res, finalhandler(req, res))
})

// Listen
server.listen(8080)