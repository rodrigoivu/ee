var mqtt = require('mqtt');
//var client  = mqtt.connect('mqtt://192.168.0.4');
var client  = mqtt.connect('mqtt://68.183.169.115')

var dataMqtt;

client.on('connect', function () {
    
	enviarMqtt();
	
 });

function enviarMqtt(){
	client.publish('desimat/control', dataMqtt);
}

function recibeOrden(socket){
		socket.on('recibeOrden', (data) => {
		   dataMqtt=data;	
           //console.log(data);
           enviarMqtt();
        });
}

module.exports = {
	recibeOrden,
	enviarMqtt
};