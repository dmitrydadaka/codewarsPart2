function vaporcode(string) {
    return string.replace(/ /g,'').split('').join`  `.toUpperCase()
    }