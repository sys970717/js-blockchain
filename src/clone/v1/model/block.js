const DateUtil = require("../util/date");

const dateUtil = new DateUtil();

// 블록체인 클래스
class Blockchain {
  constructor() {
    this.chain = [];
    this.newTransaction = [];
  }
  // 새 블록의 객체.
  createNewBlock(nonce, previousBlockHash, hash) {
    const newBlock = {
      index: this.chain.length + 1,
      timestamp: dateUtil.getTimeStampMilliSec(),
      nonce:nonce,
      hash:hash,
      previousBlockHash:previousBlockHash,
    };
    
    //다음 거래를 위한 거래내역 배열을 초기화(비움). 새롭게 생성된 블록을 chain 배열에 추가
    this.newTransaction = [];
    this.chain.push(newBlock);

    return newBlock;
  }

  printChain() {
    return this.chain;
  }
}

// 모듈화
module.exports = Blockchain;