var User = require('./user');

function run() {
  var zhenya = new User('Zhenya');
  var petya = new User('Petya');

  zhenya.hello(petya);
}

if (module.parent) {
  exports.run = run;
} else {
  run();
}
