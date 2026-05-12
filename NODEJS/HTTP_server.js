const http=require('http')
console.log(http)
const port=5000;
const userDetails={
    name:"nikki",
    email:"nikki@gmail.com",
    password:"1234",

}
//server creation
const server=http.createServer((req,res)=>{ 
    res.end(JSON.stringify(userDetails))
})


const options={
    port:400,
    path:'/getUsers'
}
http.request(options,()=>{
    console.log(res);
    
})

server.listen(port,()=>{
    console.log("server running on port:",port);
});