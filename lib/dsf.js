'use strict';

var config = require('../config');
var soap = require('soap');

var brukersesjon = {
  'brukersesjon:Brukersesjon': {
    distribusjonskanal: config.distribusjonskanal,
    systemnavn: config.systemnavn,
    brukernavn: config.brukernavn,
    passord: config.passord
  }
};

function dsf(opts, callback) {
  soap.createClient(config.url, function(err, client) {
    if (err) {
      callback(err, null);
    }
    client.addSoapHeader(brukersesjon, '', '', config.namespaceBrukersesjon);
    client.hentDetaljer(opts, function(err, result) {
      if (err) {
        callback(err, null);
      }
      callback(null, result);
    });
  });
}
module.exports = dsf;
