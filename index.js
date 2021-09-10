/* const http = require(`http`);
const  server = http.createServer((req , res)=> {
    res.status = 200;
    res.setHeader(`content-Type`,`text/plain`);
    res.end(`Hello World`);
});

server.listen(3000, () => {
    console.log(`serve on port 3000`);
});
 */

const express = require(`express`);  

 const app = express();

 app.get(`/`,(req,res)=>{
     res.send(`hello world`);
 });
 app.get(`/clientes`,(req,res)=>{
    res.json({
        cliente1:`anthony`,
        cliente2:`kriss`,
        cliente3:`lee`,
    });
});
app.get(`/productos`,(req,res)=>{
    res.json({
        primer_producto:`anthony`,
        segundo_producto:`kriss`,
        tercer_producto:`lee`,
    });
});

 app.listen(5000, () => {
     console.log(`Server on port 5000`);
 });
