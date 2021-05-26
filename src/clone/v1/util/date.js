class DateUtil {
  constructor() { }
  getTimeStampMilliSec() {
    return new Date().getTime();
  }

  getTimeStampSec() {
    return Math.floor(new Date().getTime()/1000);
  }

  getNowDateFromUtcTz() {
    return new Date();
  }
}

module.exports = DateUtil;