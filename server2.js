import {createServer} from 'http';

const PORT = process.env.PORT;
const users = [
    { id:1, name: "Visal KONG"},
    { id:2, name: "Choury KONG"}
];

const server = createServer((req, res) =>{

});

server.listen(PORT, () => { 
    console.log(`Server running on port ${PORT}`);
})