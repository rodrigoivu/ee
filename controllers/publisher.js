var mqtt = require('mqtt');
//var client  = mqtt.connect('mqtt://192.168.0.2') //IP MAC
var client  = mqtt.connect('mqtt://68.183.169.115')
var dataONOff;
var dataRPM;

client.on('connect', function () {
	enviarOnOff();
	enviarRPM();
 });

function enviarOnOff(){
	client.publish('ee/setOnOff', dataONOff);
}

function enviarRPM(){
	client.publish('ee/setRPM', dataRPM);
}

function recibeOrden(socket){
	socket.on('on_off', (data) => {
	    dataONOff=data;	
        enviarOnOff();
    });

    socket.on('rpm', (data) => {
	    dataRPM=data;	
        enviarRPM();
    });

}

module.exports = {
	recibeOrden,
	enviarOnOff,
	enviarRPM
};