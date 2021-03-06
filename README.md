[![Build Status](https://travis-ci.org/telemark/dsf.svg?branch=master)](https://travis-ci.org/telemark/dsf)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# No longer maintained

[![Greenkeeper badge](https://badges.greenkeeper.io/telemark/dsf.svg)](https://greenkeeper.io/)

This module is no longer being maintained.

We have moved all development to [node-dsf](https://github.com/telemark/node-dsf)

# tfk-dsf

Node.js module for looking up data from DSF (Det sentrale folkeregister).
DSF is register of residents in Norway.

To obtain login credentials and other permissions go to [infotorg.no](https://www.infotorg.no)

## Installation
From npm

```sh
$ npm install tfk-dsf
```

From GitHub

```sh
$ git clone git@github.com:telemark/dsf.git
```

Run the setup script

```sh
$ npm run setup
```

## Usage

```javascript
'use strict'

var dsfLookup = require('tfk-dsf')

var config = {
  url: 'http://ws-test.infotorg.no/xml/ErgoGroup/DetSentraleFolkeregister1_4/2011-09-26/DetSentraleFolkeregister1_4.wsdl',
  namespaceBrukersesjon: 'http://ws.infotorg.no/xml/Admin/Brukersesjon/2006-07-07/Brukersesjon.xsd',
  distribusjonskanal: 'PTP',
  systemnavn: 'Systemname',
  brukernavn: 'username',
  passord: 'password'
}
var query = {
  saksref: 'your-reference',
  foedselsnr: '27105500837',
  etternavn: 'AMOR',
  fornavn: 'SIV'
}
var options = {
  config:config,
  query: query
}

dsfLookup(options, function(error, data) {
  if (error) {
    console.error(error);
  }
  console.log(data);
})
```