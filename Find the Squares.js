const findSquares = num => {

    let min = num - Math.ceil(num / 2)
    let max = num - Math.floor(num / 2)
    let max2 = Math.pow(max, 2)
    let min2 = Math.pow(min, 2)

    return `${max2}-${min2}`;

};

const findSquares = n => {
const n1=(n-1)/2
return (n1+1)**2+'-'+n1**2
};

const findSquares = num => {
return Array.from(Array(num),(arr,i)=>i+1).map((x,i,arr)=>i!=0&&x**2-arr[i-1]**2==num?
                                               `${x**2}-${arr[i-1]**2}`:x).find(x=>typeof x=='string')
};