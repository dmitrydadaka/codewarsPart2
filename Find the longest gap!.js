function gap(num) {
    return  Math.max(...(num.toString(2).match(/10+(?=1)/g)||[' ']).map(x=>x.length))-1
}

function gap(num) {
    return (num.toString(2).match(/10+(?=1)/g)||[' ']).sort().pop().length-1
}

function gap(num) {
  const n=num.toString(2)
    return Math.max(...(n.slice(n.indexOf('1'),n.lastIndexOf('1'))).split('1').map(x=>x.length))
}