// import http module
const http = require('http');
const data = require("./dataJson")

// creating server using createServer
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.write(`<h1>In Url type : /node for for Answere of 'What is Node' </h1>`);
        res.write(`<h1>In Url type : /json for for see the data in json formate' </h1>`);
        res.end();
    } else if (req.url === "/json") {
        const stringData = JSON.stringify(data);
        res.write(stringData);
        res.end();
    } else if (req.url === "/node") {
        
        res.write("<h1>Introduction To Node Js</h1>");
        res.write("<p>Node js is an open source and cross platform javaScript runtime environment that allows us to execute javaScript code out of a web browser, on the server side, allowing for server-side scripting.</p>");

        res.write("<p>Node follows an event driven, non blocking I/O model. That means it uses an event-loop to handle asynchronous operations, making it well-suited fpr building scalable and efficient applications that can handle a large number of concurrent connections.</p>");

        res.end();
    } else {
        res.write('<h1> PAGE HI NHI HAI YE</h1>');
        res.end();
    }
});
server.listen(3000, () => {
    console.log(`server started On https://localhost:3000`)
})