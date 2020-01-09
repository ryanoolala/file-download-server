var http = require('http'),
    fileSystem = require('fs'),
    path = require('path');

http.createServer(function(request, response) {
    var filePath = path.join(__dirname, 'test2000.pdf');
    var stat = fileSystem.statSync(filePath);

    var file = fileSystem.readFileSync(filePath).toString('base64');
    response.writeHead(200, {
        'Content-Type': 'text/plain',
        'Content-Length': file.length
    });
    console.log("sending file")
    //var readStream = fileSystem.createReadStream(filePath);
    // We replaced all the event handlers with a simple call to readStream.pipe()
    //readStream.pipe(response);
    response.end(file);
})
  .listen(2000);
