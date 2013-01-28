module.exports = function(define) {

  define("percentile", {
    value: function(p) {
      var sorted = this.sort(function(a, b) {
        return a - b;
      });
      p = parseFloat(p, 10);
      if(p === 100) {
        return parseFloat(sorted[sorted.length - 1], 10);
      }
      var rank = p / 100.0 * (this.number - 1);
      var lrank = Math.floor(rank);
      var d = rank - lrank;
      var lower = sorted[lrank];
      var upper = sorted[lrank + 1];
      return lower + (upper - lower) * d;
    }
  });

};
