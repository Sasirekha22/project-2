const crypto=require("crypto");
const hash=crypto.createHash('sha256');
hash.update('sasi2003')
console.log(hash.digest('hex'));