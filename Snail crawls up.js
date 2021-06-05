const snail = (column, day, night) =>
  Math.max(Math.ceil(1 + (column - day) / (day - night)), 1);

function snail(column, day, night) {
  let count=0
  for(i=1;i<column;i++){
    count+=day
 if(count>=column)return i
 count-=night
 }
}