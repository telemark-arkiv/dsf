'use strict';

var dsf = require('./lib/dsf');

var opts = {
  saksref: 'Referanse',
  foedselsnr: '27105500837',
  etternavn: 'AMOR',
  fornavn: 'SIV'
};

dsf(opts, function(err, data) {
  if (err) {
    console.error(err);
  }
  console.log(data);
});
