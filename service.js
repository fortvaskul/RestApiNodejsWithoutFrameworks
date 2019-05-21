let user = {
  name: "Moon",
  hobby: "Shining",
  responsibility: "Be gray"
};

exports.getRequest = function(req, res) {
  var response = user;

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(response));
};

exports.postRequest = function(req, res) {
  body = "";

  req.on("data", function(chunk) {
    body += chunk;
  });

  req.on("end", function() {
    postBody = JSON.parse(body);

    for (let key in postBody) {
      user[key] = postBody[key];
    }
    var response = user;

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(response));
  });
};

exports.deleteRequest = function(req, res) {
  user = {
    name: "",
    hobby: "",
    responsibility: ""
  };
  var response = user;

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(response));
};

exports.putRequest = function(req, res) {
  user = {
    name: "",
    hobby: "",
    responsibility: ""
  };

  body = "";

  req.on("data", function(chunk) {
    body += chunk;
  });

  req.on("end", function() {
    postBody = JSON.parse(body);

    for (let key in postBody) {
      user[key] = postBody[key];
    }
    var response = user;

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(response));
  });
};

exports.invalidRequest = function(req, res) {
  res.statusCode = 404;
  res.setHeader("Content-Type", "text/plain");
  res.end("Invalid Request");
};
