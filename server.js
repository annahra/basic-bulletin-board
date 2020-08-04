const http = require('http');

const server = http.createServer((req, res) => {
  res.end('This is my first response')
});

//3000 is development port, process.env.PORT gets the port that
//your hosts listens to when you deploy the app
server.listen(process.env.PORT || 3000);
