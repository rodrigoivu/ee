'use strict'
var mongoose = require('mongoose');
//var uniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;

var ObjetodataSchema = new Schema({

	tm: { type: Date, required: false },
	idn: { type: Number, required: false},  
	ch1: { type: Number, required: false},
	ch2: { type: Number, required: false},
	ch3: { type: Number, required: false},
	ch4: { type: Number, required: false},
	ch5: { type: Number, required: false},
	ch6: { type: Number, required: false},
	ch7: { type: Number, required: false},
	ch8: { type: Number, required: false},
	ch9: { type: Number, required: false},
	ch10: { type: Number, required: false},
	ch11: { type: Number, required: false},
	ch12: { type: Number, required: false},
	ch13: { type: Number, required: false},
	ch14: { type: Number, required: false},
	ch15: { type: Number, required: false},
	ch16: { type: Number, required: false},
	ch17: { type: Number, required: false},
	ch18: { type: Number, required: false},
	ch19: { type: Number, required: false},
	ch20: { type: Number, required: false},
	ch21: { type: Number, required: false},
	ch22: { type: Number, required: false},
	ch23: { type: Number, required: false},
	ch24: { type: Number, required: false},
	ch25: { type: Number, required: false},
	ch26: { type: Number, required: false},
	ch27: { type: Number, required: false},
	ch28: { type: Number, required: false},
	ch29: { type: Number, required: false},
	ch30: { type: Number, required: false},
	ch31: { type: Number, required: false},
	ch32: { type: Number, required: false},
	ch33: { type: Number, required: false},
	ch34: { type: Number, required: false},
	ch35: { type: Number, required: false},
	ch36: { type: Number, required: false},
	ch37: { type: Number, required: false},
	ch38: { type: Number, required: false},
	ch39: { type: Number, required: false},
	ch40: { type: Number, required: false},
	ch41: { type: Number, required: false}

},{ collection: 'objetodata'});

//EventoSchema.plugin( uniqueValidator, { message: '{PATH} debe ser único'}) //afecta a los campos con unique: true. PATH toma el valor del campo correspondiente

module.exports = mongoose.model('Objetodata', ObjetodataSchema);