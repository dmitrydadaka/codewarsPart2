function Block([w,l,h]){
    var v = h*l*w, a = 2*h*w + 2*(h+w)*l;
    return {
      getWidth : () => w,
      getLength : () => l,
      getHeight : () => h,
      getVolume : () => v,
      getSurfaceArea : () => a
    }
  }
  
  function Block([w,l,h]){
      return {
        getWidth(){return w},
        getLength(){return l},
        getHeight(){return h},
        getVolume(){return w*l*h},
        getSurfaceArea(){return(w*l+w*h+l*h)*2}
      }
    }
    
  
  class Block{
  
    constructor(data){
      this.width=data[0]
      this.length=data[1]
      this.height=data[2]
    }
    
    getWidth(){return this.width}
    getLength(){return this.length}
    getHeight(){return this.height}
    getSurfaceArea(){return (this.length*this.width+this.length*this.height+this.width*this.height)*2}
    getVolume(){return this.length*this.height*this.width}
    
  }