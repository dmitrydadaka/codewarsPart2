function matrix(array) {
    return array.map((x,i)=>x.map((y,j)=>y>=0&&j==i?1:y<0&&j==i?0:y))
}