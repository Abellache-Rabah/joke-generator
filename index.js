const port = 3000;
const express = require("express");
const request = require("request");

const app = express();



app.get("/" , function(req , res){
  request("https://v2.jokeapi.dev/joke/Any?type=single", function(error , response , body){
		const jokeJson = JSON.parse(body);
    const joke = jokeJson.joke;
    res.send("<h3 style='color:#333;max-width: 700px;margin:50px auto; font-family:Monospace; font-size:2.1rem;'>"+joke+"</h3>");
	});
});

app.listen(3000,function(){
	console.log("Server Staring in port : "+port);
});
