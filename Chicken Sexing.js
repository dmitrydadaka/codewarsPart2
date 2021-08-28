function correctness(b, e) {
    return b.reduce((a,c,i)=>a+(c==e[i]?1:c=='?'||e[i]=='?'?0.5:0),0)
    }