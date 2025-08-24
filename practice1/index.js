const http = require("http");
const fs = require("fs");
const url = require("url");
 
const about = "./public/about.html"
const contact = "./public/contactMe.html"
const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const method = req.method;
 
  if(method === "GET" && path === "/about" ){

    const data = fs.readFileSync(about,'utf-8');
    // console.log(data);
    return res.end(data)
  }else if(method === "GET" && path ==="/contactMe"){
    const data = fs.readFileSync(contact);
   return res.end(data);
  }
  res.end("route is not found")
})

server.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
