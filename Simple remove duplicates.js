function solve(arr){
    return arr.filter((x,i)=>arr.lastIndexOf(x)==i)
}
function solve(arr){
    return [...new Set(arr.reverse())].reverse()
}