class Cuboid {
    constructor(l,w,h){
      this.length=l
      this.width=w||l
      this.height=h||l
      }
    get volume(){
     return this.length*this.height*this.width}
    get surfaceArea(){
    return 2*(this.length*this.width+this.height*this.length+this.height*this.width)}
  }
  class Cube extends Cuboid {
  }
  
  class Cuboid {
    constructor(length,width,height){
      Object.assign(this, {length,width,height})}
    get volume(){
     return this.length*this.height*this.width}
    get surfaceArea(){
    return 2*(this.length*this.width+this.height*this.length+this.height*this.width)}
  }
  class Cube extends Cuboid {
    constructor(l){
    super(l,l,l)
      }
  }
  
  class Cuboid {
    constructor(l,w,h){
      this.length=l
      this.width=w
      this.height=h}
    get volume(){
     return this.length*this.height*this.width}
    get surfaceArea(){
    return 2*(this.length*this.width+this.height*this.length+this.height*this.width)}
  }
  class Cube extends Cuboid {
    constructor(l){
    super(l,l,l)
      }
  }