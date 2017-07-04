var express = require('express');

//Create our application
var app = express();
const PORT = process.env.PORT || 3000;

//handle http and https case
app.use(function(req,res,next){
    if(req.headers['x-forwarded-proto'] === 'https'){
        res.redirect('http://' + req.hostname + req.url);
    }
    else{
         next();
    }
});

app.use(express.static('public'));

app.listen(PORT, function(){
  console.log('Express is up on port 3000');
});
