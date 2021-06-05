const calculate = (a, o, b) => /[^-+/*]/.test(o) || b==0 && o == '/' ? null : eval(a + o + b) || 0;

function calculate(n, o, n2) {
 return {'+':n+n2,'-':n-n2,'*':n*n2,'/':n2!=0?n/n2:null}[o]==null?null:{'+':n+n2,'-':n-n2,'*':n*n2,'/':n/n2}[o]
}