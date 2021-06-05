const Blockchain = require('./v1/model/block');

const bitcoin = new Blockchain();

bitcoin.createNewBlock(1111, 'aaaaaaa', '1a1a1a1a1a1a');

//새로은 트랜잭션 생성 - (총금액, 보내는이, 받는이)
bitcoin.createNewTransaction(100, 'HELLo', 'GIILE');

// bitcoin.createNewBlock(2222, 'bbbbbbb', '2b2b2b2b2b2b');
// bitcoin.createNewBlock(3333, 'ccccccc', '3c3c3c3c3c3c');

console.log(bitcoin);
console.log(bitcoin.printChain());
