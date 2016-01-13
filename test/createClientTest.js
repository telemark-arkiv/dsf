'use strict'

var assert = require('assert')
var createClient = require('../lib/createClient')
var masterOptions = require('./data/options.json').config

describe('createClient', function () {

  it('requires param options to exist', function (done) {

    var options = false

    createClient(options, function (err, data) {
      assert.throws(function () {
          if (err) {
            throw err
          } else {
            console.log(data)
          }
        }, function(err) {
          if ((err instanceof Error) && /Missing required input: options object/.test(err)) {
            return true
          }
        },
        'Unexpected error'
      );
      done()
    })
  })

  it('requires param options.url to exist', function (done) {

    var options = JSON.parse(JSON.stringify(masterOptions))
    options.url = false

    createClient(options, function (err, data) {
      assert.throws(function () {
          if (err) {
            throw err;
          } else {
            console.log(data)
          }
        }, function(err) {
          if ((err instanceof Error) && /Missing required input: options.url/.test(err)) {
            return true
          }
        },
        'Unexpected error'
      )
      done()
    })
  })

  it('requires param options.namespaceBrukersesjon to exist', function (done) {

    var options = JSON.parse(JSON.stringify(masterOptions))
    options.namespaceBrukersesjon = false

    createClient(options, function (err, data) {
      assert.throws(function () {
          if (err) {
            throw err
          } else {
            console.log(data)
          }
        }, function(err) {
          if ((err instanceof Error) && /Missing required input: options.namespaceBrukersesjon/.test(err)) {
            return true
          }
        },
        'Unexpected error'
      )
      done()
    })
  })

  it('requires param options.distribusjonskanal to exist', function (done) {

    var options = JSON.parse(JSON.stringify(masterOptions))
    options.distribusjonskanal = false

    createClient(options, function (err, data) {
      assert.throws(function () {
          if (err) {
            throw err
          } else {
            console.log(data)
          }
        }, function(err) {
          if ((err instanceof Error) && /Missing required input: options.distribusjonskanal/.test(err)) {
            return true
          }
        },
        'Unexpected error'
      )
      done()
    })
  })

  it('requires param options.systemnavn to exist', function (done) {

    var options = JSON.parse(JSON.stringify(masterOptions))
    options.systemnavn = false

    createClient(options, function (err, data) {
      assert.throws(function () {
          if (err) {
            throw err
          } else {
            console.log(data)
          }
        }, function (err) {
          if ((err instanceof Error) && /Missing required input: options.systemnavn/.test(err)) {
            return true
          }
        },
        'Unexpected error'
      )
      done()
    })
  })

  it('requires param options.brukernavn to exist', function (done) {

    var options = JSON.parse(JSON.stringify(masterOptions))
    options.brukernavn = false

    createClient(options, function (err, data) {
      assert.throws(function () {
          if (err) {
            throw err
          } else {
            console.log(data)
          }
        }, function (err) {
          if ((err instanceof Error) && /Missing required input: options.brukernavn/.test(err)) {
            return true
          }
        },
        'Unexpected error'
      )
      done()
    })
  })

  it('requires param options.passord to exist', function (done) {

    var options = JSON.parse(JSON.stringify(masterOptions))
    options.passord = false

    createClient(options, function (err, data) {
      assert.throws(function () {
          if (err) {
            throw err
          } else {
            console.log(data)
          }
        }, function (err) {
          if ((err instanceof Error) && /Missing required input: options.passord/.test(err)) {
            return true
          }
        },
        'Unexpected error'
      )
      done()
    })
  })
})

return
