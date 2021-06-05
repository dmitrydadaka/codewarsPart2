function removeBMW(str){
    if (typeof str !== "string") throw new Error("This program only works for text.");
    const re = new RegExp(/[bmw]/, 'gi');
    return str.replace(re, "");
  }
  function removeBMW(s) {
    try {
      return s.replace(/[bmw]/gi, '');
    } catch (err) {
      throw new SyntaxError("This program only works for text.");
    };
  }
  function removeBMW(str){
    if(typeof str!='string') return new Error("This program only works for text.");
    else return str.replace(/[bmw]/gi,'')
  }  