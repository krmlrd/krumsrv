var log = require('logger')(module);
var db = require('db');
db.connect();

var User = require('./user');

function run() {
  var zhenya = new User('Zhenya');
  var petya = new User('Petya');

  zhenya.hello(petya);

  log(db.getPhrase("Run successful"));
}

if (module.parent) {
  exports.run = run;
} else {
  run();
}
