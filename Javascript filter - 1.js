function searchNames( logins ){
    return logins.filter(x => /_$/.test(x[0]))
}
function searchNames( logins ){
  return logins.filter(a=>a[0].endsWith('_'));
}

function searchNames( logins ){
  return logins.filter(x=>x[0][x[0].length-1]=='_')
}