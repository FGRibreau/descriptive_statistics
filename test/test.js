require('nodeunit');
require('../index');
var csv = require('csv');


module.exports = {
  setUp: function(callback) {
    this.data = [];

    function toFloat(number){
      return parseFloat(number, 10);
    }

    csv()
    .fromPath(__dirname+'/testdata.csv')
    .on('data',function(data,index){
      this.data.push(data.map(toFloat));
    }.bind(this))
    .on('end', callback.bind(null, null));
  },

  test_pollution: function(t){
    for(var key in []){
      t.ok(false, "'"+ key + "' should not be enumerable");
    }
    t.done();
  },

  test_sum: function(t){
    t.expect(this.data.length);

    this.data.forEach(function(row){
      t.equal(Math.round(row.slice(0, 10).sum), Math.round(row[10]));
    });
    t.done();
  },

  test_mean: function(t){
    t.expect(this.data.length);

    this.data.forEach(function(row){
      t.equal(Math.round(row.slice(0, 10).mean), Math.round(row[11]));
    });
    t.done();
  },

  test_mean: function(t){
    t.expect(this.data.length);

    this.data.forEach(function(row){
      t.equal(Math.round(row.slice(0,10).mean), Math.round(row[11]));
    });
    t.done();
  },

  test_median: function(t){
    t.expect(this.data.length);

    this.data.forEach(function(row){
      t.equal(Math.round(row.slice(0,10).median), Math.round(row[12]));
    });
    t.done();
  },

  test_variance: function(t){
    t.expect(this.data.length);

    this.data.forEach(function(row){
      t.equal(Math.round(row.slice(0,10).variance), Math.round(row[13]));
    });
    t.done();
  },

  test_standard_deviation: function(t){
    t.expect(this.data.length);

    this.data.forEach(function(row){
      t.equal(Math.round(row.slice(0,10).standard_deviation), Math.round(row[14]));
    });
    t.done();
  },


  test_percentile: function(t){
    t.expect(this.data.length * 11);

    this.data.forEach(function(row){
      t.equal(Math.round(row.slice(0,10).percentile(0)), Math.round(row[15]));
      t.equal(Math.round(row.slice(0,10).percentile(10)), Math.round(row[16]));
      t.equal(Math.round(row.slice(0,10).percentile(20)), Math.round(row[17]));
      t.equal(Math.round(row.slice(0,10).percentile(30)), Math.round(row[18]));
      t.equal(Math.round(row.slice(0,10).percentile(40)), Math.round(row[19]));
      t.equal(Math.round(row.slice(0,10).percentile(50)), Math.round(row[20]));
      t.equal(Math.round(row.slice(0,10).percentile(60)), Math.round(row[21]));
      t.equal(Math.round(row.slice(0,10).percentile(70)), Math.round(row[22]));
      t.equal(Math.round(row.slice(0,10).percentile(80)), Math.round(row[23]));
      t.equal(Math.round(row.slice(0,10).percentile(90)), Math.round(row[24]));
      t.equal(Math.round(row.slice(0,10).percentile(100)), Math.round(row[25]));
    });
    t.done();
  }

};
