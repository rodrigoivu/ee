'use strict'
var mongoose = require('mongoose');
//var uniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;

var ObjetodataSchema = new Schema({

	n:  { type: String, required: false},  
	c1: { type: Number, required: false},
	c2: { type: Number, required: false},
	c3: { type: Number, required: false},
	c4: { type: Number, required: false},
	c5: { type: Number, required: false},
	c6: { type: Number, required: false},
	c7: { type: Number, required: false},
	c8: { type: Number, required: false},
	c9: { type: Number, required: false},
	c10: { type: Number, required: false},
	c11: { type: Number, required: false},
	c12: { type: Number, required: false},
	c13: { type: Number, required: false},
	c14: { type: Number, required: false},
	c15: { type: Number, required: false},
	c16: { type: Number, required: false},
	c17: { type: Number, required: false},
	c18: { type: Number, required: false},
	c19: { type: Number, required: false},
	c20: { type: Number, required: false}

},{ collection: 'objetodata'});

//EventoSchema.plugin( uniqueValidator, { message: '{PATH} debe ser único'}) //afecta a los campos con unique: true. PATH toma el valor del campo correspondiente

module.exports = mongoose.model('Objetodata', ObjetodataSchema);