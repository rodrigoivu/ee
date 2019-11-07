var mqtt = require('mqtt')
var PublisherController  = require('./publisher');
var Objetodata = require('../models/objetodata');

var socketLocal; // se rescata del index.js
var ioLocal; // se rescata del index.js
//var client  = mqtt.connect('mqtt://192.168.0.2') // IP MAC
var client  = mqtt.connect('mqtt://68.183.169.115') //


client.on('connect', () => {
	client.subscribe('ee/magnitudes_1');
	client.subscribe('ee/magnitudes_2');
	client.subscribe('ee/demanda');
	client.subscribe('ee/energia');
	client.subscribe('ee/armonicas');

})
client.on('message', (topic, message) => {

    var items;
   	items = JSON.parse(message);

   	if(topic == 'ee/magnitudes_1'){
   		//console.log(items.n);
   		saveMagnitudes_1(items);
	}
	if(topic == 'ee/magnitudes_2'){
		//console.log(items.n);
   		saveMagnitudes_2(items);
	}
	if(topic == 'ee/demanda'){
		//console.log(items.n);
   		saveDemanda(items);
	}
	if(topic == 'ee/energia'){
		//console.log(items.n);
   		saveEnergia(items);
	}
	if(topic == 'ee/armonicas'){
		//console.log(items.n);
   		saveArmonicas(items);
	}
	
	
})

function saveMagnitudes_1 (item){
var objetodata = new Objetodata(item);
mensajeMagnitudes_1(objetodata);
	
}
function saveMagnitudes_2 (item){
var objetodata = new Objetodata(item);
mensajeMagnitudes_2(objetodata);
	
}
function saveDemanda (item){
var objetodata = new Objetodata(item);
mensajeDemanda(objetodata);
	
}
function saveEnergia (item){
var objetodata = new Objetodata(item);
mensajeEnergia(objetodata);
	
}
function saveArmonicas (item){
var objetodata = new Objetodata(item);
mensajeArmonicas(objetodata);
	
}

function asignarSocket(socket,io){
    socketLocal=socket;
    ioLocal=io;
}

function mensajeMagnitudes_1(data){

	if(socketLocal){
		ioLocal.emit('magnitudes_1',{data: data});
	}
}
function mensajeMagnitudes_2(data){
	if(socketLocal){
		ioLocal.emit('magnitudes_2',{data: data});
	}
}
function mensajeDemanda(data){
	if(socketLocal){
		ioLocal.emit('demanda',{data: data});
	}
}
function mensajeEnergia(data){
	if(socketLocal){
		ioLocal.emit('energia',{data: data});
	}
}
function mensajeArmonicas(data){
	if(socketLocal){
		ioLocal.emit('armonicas',{data: data});
	}
}


module.exports = {
	asignarSocket
};
