function countDevelopers(a) {
    return a.filter(d => d['continent'] === 'Europe' && d['language'] === 'JavaScript').length;
  }
  
  function countDevelopers(list) {
    return list.filter(x=>x.continent=='Europe'&&x.language=='JavaScript').length
  }
  
  function countDevelopers(list) {
    return list.reduce((y,x)=>y+(x.continent=='Europe'&&x.language=='JavaScript'),0)
  }