const express = require('express');
const app = express();
//var SerialPort = require("serialport");

var port = 3000;

var arduinoCOMPort = "COM3";

// var arduinoSerialPort = new SerialPort(arduinoCOMPort, {  
//  baudrate: 9600
// });

// arduinoSerialPort.on('open',function() {
//   console.log('Serial Port ' + arduinoCOMPort + ' is opened.');
// });

app.get('/', function (req, res) {

    return res.send('Working');
 
})

app.get('/:action', function (req, res) {
    debugger;
   var action = req.params.action;
    
    // if(action == 'led'){
    //     //arduinoSerialPort.write("w");
    //     console.write("w");
    //     return res.send('Led light is on!');
    // } 
    // if(action == 'off') {
    //     // arduinoSerialPort.write("t");
    //     console.write("w");
    //     return res.send("Led light is off!");
    // }
    console.log("w");
    return res.send('Action1: ' + action);
 
});

app.listen(port, function () {
  console.log('Example app listening on port http://0.0.0.0:' + port + '!');
});