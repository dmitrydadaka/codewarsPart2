function removeRotten(arr){
    return arr ? arr.map(x=>x.replace('rotten', '').toLowerCase()) : [] ;
}

function removeRotten(s){
  return !s?[]:s.map(x=>x.replace(/(rotten)/,'').toLowerCase())
}