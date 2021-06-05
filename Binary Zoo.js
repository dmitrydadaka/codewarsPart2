function countTheAnimals(animals) {
    return Object.values(animals).reduce((a,b)=>a+parseInt(+b,2),0)
    }