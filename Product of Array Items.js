/**
 * Returns product of all numbers in a numeric array.
 * Returns null if param is null or array is empty.
 * @param {Array} values - The array containing the items.
 */
 function product(values) {
    return +values==0?null:values.reduce((a,c)=>a*c,1)
  }
  
  /**
   * Returns product of all numbers in a numeric array.
   * Returns null if param is null or array is empty.
   * @param {Array} values - The array containing the items.
   */
  product=v=>v&&v.length?eval(v.join`*`):null
  
  /**
   * Returns product of all numbers in a numeric array.
   * Returns null if param is null or array is empty.
   * @param {Array} values - The array containing the items.
   */
  function product(values) {
    return !Array.isArray(values)||!values.length?null:values.reduce((a,c)=>a*c,1)
  }
  
  /**
   * Returns product of all numbers in a numeric array.
   * Returns null if param is null or array is empty.
   * @param {Array} values - The array containing the items.
   */
  function product(values) {
    return !Array.isArray(values)||!values.length?null:values.some(x=>x==0)?0:values.reduce((a,c)=>a*c,1)
  }