module.exports = class DepthCalculator {
    calculateDepth( arr ) {
        let arrays = 0;
        let depth = 0;
       
        for (let k of arr) {
           if ( Array.isArray(k)) {
            arrays = this.calculateDepth(k);
           }
           if ( depth < arrays ) depth = arrays;
        }
    return depth+=1;
    }
};
