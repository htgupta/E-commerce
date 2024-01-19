import http from 'http';

const PORT = 1000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World');
});

server.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});