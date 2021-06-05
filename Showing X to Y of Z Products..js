var paginationText = function(pr, pe, ts){
    return `Showing ${(pr-1)*pe+1} to ${Math.min(ts, pr*pe)} of ${ts} Products.`
    }
    
    var paginationText = function(pageNumber, pageSize, totalProducts){
      return 'Showing ' + (((pageNumber - 1) * pageSize) + 1) + ' to ' + Math.min(pageSize * pageNumber, totalProducts) + ' of ' + totalProducts + ' Products.';
    }
    
    var paginationText = function(pr, pe, ts){
    return `Showing ${(pr-1)*pe+1} to ${ts<pr*pe?ts:pr*pe} of ${ts} Products.`
    }