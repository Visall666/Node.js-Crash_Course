import {createServer} from 'http';

const PORT = process.env.PORT;
const users = [
    { id:1, name: "Visal KONG"},
    { id:2, name: "Choury KONG"},
    { id:3, name: "Ken KONG"}
    
];

// logger middleware
const logger = (req, res, next) =>{
    console.log(`${req.method} ${req.url}`);
    next();
};

const server = createServer((req, res) => {
    logger(req, res, () =>{
        if(req.url === '/api/users' && req.method === 'GET') {
            res.setHeader('Content-Type', 'application/json');
            res.write(JSON.stringify(users));
            res.end();
        } 
        else if(req.url.match(/\api\/users\/([0-9]+)/) && req.method === 'GET') {
            const id = req.url.split('/')[3]; 
            const user = users.find((user) => user.id === parseInt(id)); //find user by id
            if (user) {
                res.setHeader('Content-Type', 'application/json');
                res.write(JSON.stringify(user));
                res.end();
            } else {
                res.setHeader('Content-Type', 'application/json');
                res.statusCode = 404;
                res.write(JSON.stringify({message: 'User not found'}));
                res.end();
            }
        } else {
            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 404;
            res.write(JSON.stringify({ message: 'Route not found'}));
            res.end();
        }
    });
    
});

server.listen(PORT, () => { 
    console.log(`Server running on port ${PORT}`);
})