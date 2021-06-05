function validate(username, password){
    const len = Math.ceil(Math.min(username.length/2, password.length/2));
    let dictOfSeq = username.split('').map((_,i) => username.slice(i,len + i)).filter(s => s.length == len);
    return len == 0 ? false : !dictOfSeq.some(seq => password.includes(seq));
  }
  function validate(username, password){
    const length = Math.ceil(Math.min(username.length/2, password.length/2))
    for (let i=0; i<password.length-length+1; i++) {
      if (username.includes(password.substr(i, length))>0) {
        return false
      }
    }
    return true
  }