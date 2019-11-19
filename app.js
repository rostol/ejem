const express = require("express");
const app = express();

var path = require('path');
app.use(express.static(path.join(__dirname, '/public')));
app.set("view engine", "pug");


app.get ('/', (req, res) => {                            
    res.render('index');                                
});
   


const port = 3000;
app.listen(port, () => {
  console.log(`app corriendo en el puerto:${port}`);
});