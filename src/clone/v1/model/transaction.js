//새로운 트랜젝션(거래)가 발생했을 때 작동되는 클래스
//인자값으로, 총액수, 보내는사람, 받는사람이 들어간다.
class Transaction {
  constructor(amount, sender, receiver ) {
    this.amount = amount;
    this.sender = sender;
    this.receiver = receiver;
    this.timestamp = Date.now();
  }

  getDetails() {
    const { amount, sender, receiver, timestamp } = this;
    return {
      amount,
      sender,
      receiver,
      timestamp,
    };
  }

  parseTransaction(transaction) {
    this.amount = transaction.amount;
    this.sender = transaction.sender;
    this.receiver = transaction.receiver;
    this.timestamp = transaction.timestamp;
  }
}

module.exports = Transaction;