var turn=(c,t)=>"NW :-) SE ;-) EN :-P WS ;-P".indexOf(c+t)+1?'left':'right'

function turn(current, target) {
  return "NESWN".includes(current+target) ? 'right' : 'left';
}

function turn(c, t) {
  return c=='N'&&t=='E'||c=='S'&&t=='W'||c=='E'&&t=='S'||c=='W'&&t=='N'?'right':'left'
}
