const crypto = require('crypto');
 const algorithm = 'aes-192-cbc';
const password = 'Password used to generate key';
 const key = crypto.scryptSync(password, 'salt', 24);
 const iv = Buffer.alloc(16, 0);
 const cipher = crypto.createCipheriv(algorithm, key, iv);
let value = cipher.final('hex');
console.log("buffer :- " + value);