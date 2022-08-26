//common Js,every file is a module(by default)
//Modules-encapsulated code(only share minimum)

const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./06-alternative-flavor');
require('./07-mind-grenade');
sayHi('susamn');
sayHi(names.john);
sayHi(names.peter);
