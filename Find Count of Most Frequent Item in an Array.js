function mostFrequentItemCount(n) {
    return n.length?Math.max(...n.map(x=>n.filter(y=>y==x).length)):0
  }