class Stack {
    constructor() {
      this.neq = [];
      this.eq = [];
    }
  
    push(val) {
      this.neq.push(val);
    }
  
    pop() {
      if (this.eq.length == 0) {
        const size = this.neq.length
        for(let i=0; i<size-1;i++){
          var temp = this.neq.shift();
          this.eq.push(temp);
        }
    }
    this.neq.pop()
    while(this.eq.length>0){
      var temp = this.eq.shift()
      this.neq.push(temp)
    }
    return this.neq
  }
  top(){
    return this.neq[this.neq.length-1]
  }

  empty(){
    return this.neq.length == 0;
  }
  
  }

  const sqq = new Stack();
  sqq.push(2)
  sqq.push(3)
  sqq.push(4)
  sqq.push(5)
  sqq.push(6)
  sqq.push(7)
  console.log(sqq)
  console.log(sqq.top())
  sqq.pop()
  sqq.pop()
  console.log(sqq)
  console.log(sqq.top())
  console.log(sqq.empty())
