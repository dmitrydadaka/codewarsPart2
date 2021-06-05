function make_lazy(fn) {
    var args = [].slice.call(arguments, 1)
    return function() {
      return fn.apply(this, args)
    }
  }
  
  var make_lazy = function () {
    // TODO: implement this function
  };var make_lazy = function (fn) {
    return fn.bind.apply(fn, arguments);
  }
  
  var make_lazy = function (f,...m) {
    return ()=>f(...m)
  };