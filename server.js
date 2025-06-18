import { error } from 'console';
import http from 'http';

const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
    try {
        // check get method
        if (req.method === 'GET') {
            if (req.url === '/') {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end('<h1> Home page </h1>');
            }
            else if (req.url === '/about') {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end('<h1> about page </h1>');
            } else {
                res.writeHead(404, {'Content-Type': 'text/plain'});
                res.end("Page not found.");
            }
        } else{
            throw new Error('Method not allowed.');
        }
    } catch (error) {
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end("Server Error.");
    }
});

server.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`);
})