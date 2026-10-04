const crypto = require("crypto");

function hash(text) {
  return crypto.createHash("sha256").update(text).digest("hex");
}

function makeBlock(index, data, previousHash) {
  return {
    index: index,
    data: data,
    previousHash: previousHash,
    hash: hash(index + data + previousHash)
  };
}

const block0 = makeBlock(0, "Genesis", "0");
const block1 = makeBlock(1, "Leon learns Git", block0.hash);
const block2 = makeBlock(2, "Leon learns hashes", block1.hash);

console.log(block0);
console.log(block1);
console.log(block2);
console.log("block1 points at block0:", block1.previousHash === block0.hash);

block0.data = "Changed";
block0.hash = hash(block0.index + block0.data + block0.previousHash);

console.log("still linked:", block1.previousHash === block0.hash);