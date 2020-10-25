const express = require('express');
const app = express();

var port = 3000;

app.get('/', function (req, res) {

    return res.send('Working');
 
})

app.get('/:action', function (req, res) {
    debugger;
   var action = req.params.action;
   console.log(action);
    if(action == 'led'){
        console.log("Called to api /led");
        return res.send('Led light is on!');
    }else if(action == 'off') {
        console.log("Called to api /off");
        return res.send("Led light is off!");
    }else{
      console.log("Called to api route is not available");
      return res.send('Invalid endpoint for ' + action);
    }
});


app.listen(port, function () {
  console.log('Example app listening on port http://0.0.0.0:' + port + '!');
});