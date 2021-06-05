function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    return enteredCode===correctCode && new Date(currentDate) <= new Date(expirationDate);
  }
  
  function checkCoupon(e, c, cD, eD){
    return e===c&&Date.parse(cD)<=Date.parse(eD)
  }