const crypto = require("crypto");

function hash(text) {
  return crypto.createHash("sha256").update(text).digest("hex");
}

console.log(hash("Learn Git"));
console.log(hash("Learn Git"));
console.log(hash("Learn Git."));
console.log(hash("Learn Git").length);
console.log(hash("a").length);
console.log(hash("a much longer sentence than the first one").length);