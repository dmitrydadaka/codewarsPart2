function removeSmallest(numbers) {
    //  throw "TODO: removeSmallest";
    return numbers.filter((x,i)=>i!=numbers.findIndex(x=>x==Math.min(...numbers)))}