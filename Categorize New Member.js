const openOrSenior = (members) => members.map(([age, handicap]) => (age >= 55) && (handicap > 7) ? 'Senior' : 'Open')

function openOrSenior(data){
return  data.map(x=>x[0]>54&&x[1]>7?'Senior':'Open')
}