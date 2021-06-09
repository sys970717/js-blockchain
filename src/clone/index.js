const Blockchain = require('./v1/model/block');

const bitcoin = new Blockchain();

bitcoin.createNewBlock(1111, 'aaaaaaa', '1a1a1a1a1a1a');

//새로은 트랜잭션 생성 - (총금액, 보내는이, 받는이)
bitcoin.createNewTransaction(100, 'HELLo', 'GIILE');

// 추가 트랜잭션 생성.
bitcoin.createNewTransaction(50, 'HELLo', 'GIILE');
bitcoin.createNewTransaction(20, 'HELLo', 'GIILE');

bitcoin.createNewBlock(2222, bitcoin.getPreviousBlockHash(), '1b1b1b1b1b1b');

console.log(bitcoin);
console.log(bitcoin.printChain());
