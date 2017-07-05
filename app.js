console.log('starting app');
const fs = require('fs');
const _ = require('lodash');

const notes = require('./node.js');

console.log(_.isString(true));
console.log(_.isString("Mark"));
var filteredArray = _.uniq(['mark',1,'Mark','mark', 3,11,3,4]);
console.log(filteredArray);