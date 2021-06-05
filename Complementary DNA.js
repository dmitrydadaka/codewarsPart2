let pairs = {A:'T',T:'A',C:'G',G:'C'};
const DNAStrand = dna => dna.replace(/./g, c => pairs[c]);

const DNAStrand = dna => dna.replace(/./g, m => 'CGAT'['GCTA'.indexOf(m)]);

function DNAStrand(dna){
  return dna.replace(/[ATGC]/g, x=>x=='A'?'T':x=="T"?"A":x=='G'?'C':'G')
}