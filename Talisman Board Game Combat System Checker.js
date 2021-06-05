function getRequired(p,e) {
    return (a=>a==0?"Random":a>=6?"Auto-win":a<=-6?'Auto-lose'
            :a>0?`(${7-a}..6)`:a>-5?`(1..${5+a})`:'Pray for a tie!')(p[0]+p[1]-e[0]-e[1])
  }
  
  function getRequired(p, e) {
    if(p[0]+p[1]==e[0]+e[1])return'Random'
    if(p[0]+p[1]-6>=e[0]+e[1])return "Auto-win"
    if(p[0]+p[1]<=e[0]+e[1]-6)return"Auto-lose"
    if (p[0]+p[1] > e[0]+e[1]) return `(${e[0]+e[1] + 7 - p[0]-p[1]}..6)`
    if (p[0]+p[1] + 5 > e[0]+e[1]) return `(1..${p[0]+p[1] + 5 - e[0]-e[1]})`  
    return 'Pray for a tie!'
  }
  