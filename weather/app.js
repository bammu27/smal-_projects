const express = require('express');
const https = require('https');
const bodyParser = require('body-parser')
            

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get('/',(req,res)=>{

    res.sendFile(__dirname+'/index.html');
})


app.post('/',(req,res)=>{

const lat =  req.body.lattitude;
const long = req.body.longitude;


const apikey = '4aa8c7733f7575dc16d2d50009ad6fd5';
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apikey}`;


  https.get(url, (response) => {
   

    response.on('data', (data) => {
      try {
        const weather = JSON.parse(data);
        const temp = weather.main.temp;
        const wdesc = weather.weather[0].description;
        res.send(`Temperature:°C${temp}, Description: ${wdesc}`);
      } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred');
      }
    });
  }).on('error', (error) => {
    console.error(error);
    res.status(500).send('An error occurred');
  });

});








  




app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
