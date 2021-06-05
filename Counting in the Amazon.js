function countArara(n) {
    return ('adak '.repeat(~~(n/2))+(n%2?'anane':'')).trim()
}

function countArara(n) {
    return n%2?'adak '.repeat(~~(n/2))+'anane':'adak '.repeat(n/2).trim()
}
