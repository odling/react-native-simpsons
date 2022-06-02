const port = 3000;
const http = require("http");
const httpStatus = require("http-status-codes").StatusCodes;
const contentTypes = require("./contentTypes");
const utils = require("./utils");
const router = require("./router");

router.get("/", (req, res) => {
  res.writeHead(httpStatus.OK, contentTypes.json);
  utils.getFile("data/simpsons.json", res);
});

http.createServer(router.handle).listen(port);
console.log(`The server is started an listening after port ${port}`);

