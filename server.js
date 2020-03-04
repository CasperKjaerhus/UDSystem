'use strict';

const http = require('http');
const fs = require('fs');
const {parse} = require('url');
const {resolve, sep} = require('path');


const baseDir = process.cwd();
const pubDir = baseDir + '/Public/';
const hostname = '127.0.0.1';
const port = 3000;

function urlPath(url) {
  let {pathname} = parse(url);
  let path = resolve(decodeURIComponent(pathname).slice(1));
  if (path != baseDir &&
      !path.startsWith(baseDir + sep)) {
    throw {status: 403, body: 'Forbidden'};
  }
  return path;
}


const server = http.createServer((req, res) => {
  const url = urlPath(req.url);
  if (req.method === 'GET'){
    res.writeHead(200);
    const data = fs.readFileSync(url);
    res.write(data);
    res.end();
  } else if (req.method === 'POST'){
    res.writeHead(200);
    res.end();
    console.log(req);
  }

}).listen(port);

console.log(`Server ready! Listening on ${port}`);


