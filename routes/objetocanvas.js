'use strict'

var express = require('express');
var ObjetocanvasController = require ('../controllers/objetocanvas');

var api = express.Router();
var md_auth = require('../middlewares/authenticated');

// var multipart = require('connect-multiparty');
// var md_upload = multipart({ uploadDir: './uploads/imgObjeto'});

 api.post('/registra-objetocanvas',[md_auth.ensureAuth, md_auth.ensureAdminUser], ObjetocanvasController.registraItem);
 api.put('/actualiza-objetocanvas/:id',[md_auth.ensureAuth, md_auth.ensureAdminUser], ObjetocanvasController.actualizaItem);
 api.get('/objetocanvas-todos',[md_auth.ensureAuth,md_auth.ensureAdminUser], ObjetocanvasController.itemsTodos);
 api.delete('/borra-objetocanvas/:id',[md_auth.ensureAuth,md_auth.ensureAdminUser], ObjetocanvasController.deleteItem);
module.exports = api;