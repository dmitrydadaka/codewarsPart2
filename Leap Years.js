function isLeapYear(r) {
    return r%4==0&&r%100!=0||r%400==0
  }
  
  function isLeapYear(r) {
    return r%4==0&&r%100!=0?true:r%4==0&&r%100==0&&r%400==0?true:false
  }