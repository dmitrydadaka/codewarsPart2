function newAvg(arr, n) {
    return (x=>x<0?function () {throw Error('errrrror')}():x)
    (Math.ceil((arr.length+1)*n-arr.reduce((a,b)=>a+b,0)))
}

function newAvg(arr, n) {
    if(Math.ceil((arr.length+1)*n-arr.reduce((a,b)=>a+b,0))<0)throw new Error()
    return Math.ceil((arr.length+1)*n-arr.reduce((a,b)=>a+b,0))
}