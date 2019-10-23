'use strict'

var express = require('express');
var ObjetodataController = require ('../controllers/objetodata');

var api = express.Router();
var md_auth = require('../middlewares/authenticated');

// var multipart = require('connect-multiparty');
// var md_upload = multipart({ uploadDir: './uploads/imgObjeto'});

 api.post('/registra-objetodata',[md_auth.ensureAuth, md_auth.ensureAdminUser], ObjetodataController.registraItem);
 api.get('/objetodata-todos',[md_auth.ensureAuth,md_auth.ensureAdminUser], ObjetodataController.itemsTodos);
 api.get('/objetodata-rango-fechas',[md_auth.ensureAuth,md_auth.ensureAdminUser], ObjetodataController.itemsRangoFechas);
 api.get('/objetodata-rango-ultimos',[md_auth.ensureAuth,md_auth.ensureAdminUser], ObjetodataController.itemsRangoUltimos);
 api.delete('/borra-objetodata/:id',[md_auth.ensureAuth,md_auth.ensureAdminUser], ObjetodataController.deleteItem);
module.exports = api;