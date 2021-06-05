getIssuer=n=>/^3[4|7]\d{13}/g.test(n)?'AMEX':/^6011\d{12}/g.test(n)?'Discover':/^4(\d{12}|\d{15})$/g.test(n)?'VISA':/^5[1-5]\d{14}/g.test(n)?'Mastercard':'Unknown'

function getIssuer(n) {
  const a=(n+'').toString()
  return a.length==15&&(a.slice(0,2)=='34'||a.slice(0,2)=='37')?'AMEX':
  a.length==16&&a.slice(0,4)=='6011'?'Discover':
  a.length==16&&(a.slice(0,2)>50&&a.slice(0,2)<56)?'Mastercard':
  (a.length==16||a.length==13)&&a.slice(0,1)=='4'?'VISA':'Unknown'
}