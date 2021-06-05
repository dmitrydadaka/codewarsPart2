const sortMyString = S =>
  [...S].reduce((pre, val, idx) => (pre[idx % 2] += val, pre), [``, ``]).join(` `);

const sortMyString = s => s.replace(/(.)./g, '$1') + ' ' + s.replace(/.(.)?/g, '$1')

function sortMyString(S) {
    return [...S].reduce((a,c,i)=>i%2?[a[0],a[1]+c]:[a[0]+c,a[1]],['','']).join` `
}

function sortMyString(S) {
    return [[...S].filter((z,i)=>i%2==0).join``,[...S].filter((k,i)=>i%2).join``].join` `
}