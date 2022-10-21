const crypto = require('crypto');
const cipher = crypto.getCiphers();
console.log("The list of algorithms are as follows: ", cipher);