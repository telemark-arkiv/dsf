'use strict'

var assert = require('assert')
var dsfLookup = require('../index')
var masterOptions = require('./data/options.json')

describe('tfk-dsf', function () {

  it('requires param options to exist', function (done) {

    var options = false

    dsfLookup(options, function (err, data) {
      assert.throws(function () {
          if (err) {
            throw err
          } else {
            console.log(data)
          }
        }, function (err) {
          if ((err instanceof Error) && /Missing required input: options object/.test(err)) {
            return true
          }
        },
        'Unexpected error'
      )
      done()
    })
  })

  it('requires param options.config to exist', function (done) {

    var options = JSON.parse(JSON.stringify(masterOptions))
    options.config = false

    dsfLookup(options, function (err, data) {
      assert.throws(function () {
          if (err) {
            throw err
          } else {
            console.log(data)
          }
        }, function (err) {
          if ((err instanceof Error) && /Missing required input: options.config/.test(err)) {
            return true
          }
        },
        'Unexpected error'
      )
      done()
    })
  })

  it('requires param options.config.url to exist', function(done) {

    var options = JSON.parse(JSON.stringify(masterOptions));
    options.config.url = false;

    dsfLookup(options, function(err, data) {
      assert.throws(function() {
          if (err) {
            throw err;
          } else {
            console.log(data);
          }
        }, function(err) {
          if ((err instanceof Error) && /Missing required input: options.config.url/.test(err)) {
            return true;
          }
        },
        'Unexpected error'
      );
      done();
    });
  });

  it('requires param options.config.namespaceBrukersesjon to exist', function(done) {

    var options = JSON.parse(JSON.stringify(masterOptions));
    options.config.namespaceBrukersesjon = false;

    dsfLookup(options, function(err, data) {
      assert.throws(function() {
          if (err) {
            throw err;
          } else {
            console.log(data);
          }
        }, function(err) {
          if ((err instanceof Error) && /Missing required input: options.config.namespaceBrukersesjon/.test(err)) {
            return true;
          }
        },
        'Unexpected error'
      );
      done();
    });
  });

  it('requires param options.config.distribusjonskanal to exist', function(done) {

    var options = JSON.parse(JSON.stringify(masterOptions));
    options.config.distribusjonskanal = false;

    dsfLookup(options, function(err, data) {
      assert.throws(function() {
          if (err) {
            throw err;
          } else {
            console.log(data);
          }
        }, function(err) {
          if ((err instanceof Error) && /Missing required input: options.config.distribusjonskanal/.test(err)) {
            return true;
          }
        },
        'Unexpected error'
      );
      done();
    });
  });

  it('requires param options.config.systemnavn to exist', function(done) {

    var options = JSON.parse(JSON.stringify(masterOptions));
    options.config.systemnavn = false;

    dsfLookup(options, function(err, data) {
      assert.throws(function() {
          if (err) {
            throw err;
          } else {
            console.log(data);
          }
        }, function(err) {
          if ((err instanceof Error) && /Missing required input: options.config.systemnavn/.test(err)) {
            return true;
          }
        },
        'Unexpected error'
      );
      done();
    });
  });

  it('requires param options.config.brukernavn to exist', function(done) {

    var options = JSON.parse(JSON.stringify(masterOptions));
    options.config.brukernavn = false;

    dsfLookup(options, function(err, data) {
      assert.throws(function() {
          if (err) {
            throw err;
          } else {
            console.log(data);
          }
        }, function(err) {
          if ((err instanceof Error) && /Missing required input: options.config.brukernavn/.test(err)) {
            return true;
          }
        },
        'Unexpected error'
      );
      done();
    });
  });

  it('requires param options.config.passord to exist', function(done) {

    var options = JSON.parse(JSON.stringify(masterOptions));
    options.config.passord = false;

    dsfLookup(options, function(err, data) {
      assert.throws(function() {
          if (err) {
            throw err;
          } else {
            console.log(data);
          }
        }, function(err) {
          if ((err instanceof Error) && /Missing required input: options.config.passord/.test(err)) {
            return true;
          }
        },
        'Unexpected error'
      );
      done();
    });
  });

  it('requires param options.query to exist', function(done) {

    var options = JSON.parse(JSON.stringify(masterOptions));
    options.query = false;

    dsfLookup(options, function(err, data) {
      assert.throws(function() {
          if (err) {
            throw err;
          } else {
            console.log(data);
          }
        }, function(err) {
          if ((err instanceof Error) && /Missing required input: options.query/.test(err)) {
            return true;
          }
        },
        'Unexpected error'
      );
      done();
    });
  });

  it('requires param options.query.saksref to exist', function(done) {

    var options = JSON.parse(JSON.stringify(masterOptions));
    options.query.saksref = false;

    dsfLookup(options, function(err, data) {
      assert.throws(function() {
          if (err) {
            throw err;
          } else {
            console.log(data);
          }
        }, function(err) {
          if ((err instanceof Error) && /Missing required input: options.query.saksref/.test(err)) {
            return true;
          }
        },
        'Unexpected error'
      );
      done();
    });
  });

  it('requires param options.query.foedselsnr to exist', function(done) {

    var options = JSON.parse(JSON.stringify(masterOptions));
    options.query.foedselsnr = false;

    dsfLookup(options, function(err, data) {
      assert.throws(function() {
          if (err) {
            throw err;
          } else {
            console.log(data);
          }
        }, function(err) {
          if ((err instanceof Error) && /Missing required input: options.query.foedselsnr/.test(err)) {
            return true;
          }
        },
        'Unexpected error'
      );
      done();
    });
  });

  it('requires param options.query.etternavn to exist', function(done) {

    var options = JSON.parse(JSON.stringify(masterOptions));
    options.query.etternavn = false;

    dsfLookup(options, function(err, data) {
      assert.throws(function() {
          if (err) {
            throw err;
          } else {
            console.log(data);
          }
        }, function(err) {
          if ((err instanceof Error) && /Missing required input: options.query.etternavn/.test(err)) {
            return true;
          }
        },
        'Unexpected error'
      );
      done();
    });
  });

  it('requires param options.query.fornavn to exist', function(done) {

    var options = JSON.parse(JSON.stringify(masterOptions));
    options.query.fornavn = false;

    dsfLookup(options, function(err, data) {
      assert.throws(function() {
          if (err) {
            throw err;
          } else {
            console.log(data);
          }
        }, function(err) {
          if ((err instanceof Error) && /Missing required input: options.query.fornavn/.test(err)) {
            return true;
          }
        },
        'Unexpected error'
      );
      done();
    });
  });

});

return;