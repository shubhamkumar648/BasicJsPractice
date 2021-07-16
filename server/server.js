const express = require("express");

const app = express();

app.get("/", function(request,response) {

    response.send("<h1>hello world</h1>")
})

app.listen(3000, function () {
  console.log("server is running at port 3000");
});


