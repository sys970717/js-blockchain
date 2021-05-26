const Blockchain = require('./v1/model/block');

const bitcoin = new Blockchain();

bitcoin.createNewBlock(1111, 'aaaaaaa', '1a1a1a1a1a1a');
bitcoin.createNewBlock(2222, 'bbbbbbb', '2b2b2b2b2b2b');
bitcoin.createNewBlock(3333, 'ccccccc', '3c3c3c3c3c3c');

console.log(bitcoin.printChain());