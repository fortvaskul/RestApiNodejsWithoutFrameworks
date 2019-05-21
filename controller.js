const http = require("http");
const url = require("url");

module.exports = http.createServer((req, res) => {
  var service = require("./service.js");
  const reqUrl = url.parse(req.url, true);

  // GET Endpoint
  if (reqUrl.pathname == "/user" && req.method === "GET") {
    console.log(
      "Request Type: " + req.method + " Endpoint: " + reqUrl.pathname
    );

    service.getRequest(req, res);
  }

  // POST Endpoint
  else if (reqUrl.pathname == "/user" && req.method === "POST") {
    console.log(
      "Request Type: " + req.method + " Endpoint: " + reqUrl.pathname
    );

    service.postRequest(req, res);
  }

  // DELETE Endpoint
  else if (reqUrl.pathname == "/user" && req.method === "DELETE") {
    console.log(
      "Request Type: " + req.method + " Endpoint: " + reqUrl.pathname
    );

    service.deleteRequest(req, res);
  }

  // PUT Endpoint
  else if (reqUrl.pathname == "/user" && req.method === "PUT") {
    console.log(
      "Request Type: " + req.method + " Endpoint: " + reqUrl.pathname
    );

    service.putRequest(req, res);
  }

  // Invalid Endpoint
  else {
    console.log(
      "Request Type: " + req.method + " Invalid Endpoint: " + reqUrl.pathname
    );

    service.invalidRequest(req, res);
  }
});
