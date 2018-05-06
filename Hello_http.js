var http = require("http");

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World 3");
  response.end();
  function say(word) {
  console.log(word);
}
}).listen(8888);