let express = require('express');

let app = express();

app.use(express.static(__dirname+'/dist/livre-de-caisse-front-end'));

app.get('/*',(req, res)=>{
  res.sendFile(__dirname+'/dist/livre-de-caisse-front-end/index.html')
});

app.listen(process.env.PORT || 8080);
