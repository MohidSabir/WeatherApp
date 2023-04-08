require('dotenv').config();
var express = require('express');
var router = express.Router();

const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 6000;

const { response } = require('express');



/* GET home page. */
app.get('/', function(req, res, next) {
  res.render('index', {data:response.data});
});

app.get('/submit',function(req,res){
const city = req.query.city
const url_api = `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=3761f1314554d31965db1ce808465f94`;

axios.get(url_api)
  .then(function (response) {
    res.render('index',{data:response.data})
    // res.send(response.data)
  })
  .catch(function (error) {
    res.send(error)
  })
 
})

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
})

module.exports = app;
