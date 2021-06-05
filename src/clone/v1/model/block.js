const DateUtil = require('../util/date');
const Transaction = require('./transaction');

const dateUtil = new DateUtil();

// 블록체인 클래스
class Blockchain {
  constructor() {
    this.chain = [];
    this.pendingTransaction = [];
    this.previousBlockHash;
    this.bits = 0,
    this.version = '1.0.0';
    this.mercleHash = '';
    
  }
  /**
   * 새 블록의 객체.
   * hash, 새로운 해시.
   * index: 새로운 블록의 등록을 위해.
   * version: 소프트웨어 버전
   * previousBlockHash 이전 블록의 해시
   * mercleHash: 최상위해시
   * timestamp: 블록이 생성된 시간.
   * bits: 난이도 조절용, 계산난이도 목표
   * nonce: 해시값 계산을 위한 임의값, 
   */
  createNewBlock(nonce, previousBlockHash, hash) {
    const newBlock = {
      hash:hash,
      index: this.chain.length + 1,
      version: this.version,
      previousBlockHash:previousBlockHash,
      mercleHash: this.mercleHash,
      timestamp: dateUtil.getTimeStampMilliSec(),
      bits: this.bits,
      nonce:nonce,
    };
    
    //다음 거래를 위한 거래내역 배열을 초기화(비움). 새롭게 생성된 블록을 chain 배열에 추가
    this.pendingTransaction = [];
    this.chain.push(newBlock);
    this.previousBlockHash = previousBlockHash;

    return newBlock;
  }

  // 이전 블록 해쉬값 가져오기
  getPreviousBlockHash() {
    return this.previousBlockHash;
  }

  printChain() {
    return this.chain;
  }

  getLastBlock() {
    return this.chain[this.chain.length - 1];
  }

  createNewTransaction(amount, sender, receiver) {
    this.pendingTransaction.push(new Transaction(amount, sender, receiver).getDetails());

    return (this.getLastBlock()).index+1;
  }
}

// 모듈화
module.exports = Blockchain;