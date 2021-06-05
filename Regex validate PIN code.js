function validatePIN (pin) {
    return /^(\d{4}|\d{6})$/g.test(pin)
  }

  function validatePIN (pin) {
    return (pin.length==4||pin.length==6)&&pin.replace(/[0-9]/g, '').length==0
  }