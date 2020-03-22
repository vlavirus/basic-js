const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push('( '+value+' )')
    return this;
  },
  removeLink(position) {
    if ( typeof position !== 'number' || position > this.chain.length  || position < 1 ) {
      this.chain = [];
      throw new Error("Wrong");
    }
    this.chain.splice(position - 1,1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let chainBack = this.chain.join('~~');
    this.chain = [];
    return chainBack;
  }
};

module.exports = chainMaker;
