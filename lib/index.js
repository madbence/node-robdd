function H() {
  this._lookup = {};
}

H.prototype.member = function member(index, low, high) {
  return this._lookup[index] != null &&
         this._lookup[index][low] != null &&
         this._lookup[index][low][high] != null;
};

H.prototype.lookup = function lookup(index, low, high) {
  return this._lookup[index][low][high];
};

H.prototype.insert = function insert(index, low, high, node) {
  ((this._lookup[index] = this._lookup[index] || {})[low] = this._lookup[index][low] || {})[high] = node;
};

function T() {
  this._lookup = [[],[]];
}

T.prototype.add = function add(index, low, high) {
  this._lookup.push([low, high, index]);
  return this._lookup.length - 1;
};

T.prototype.v = function v(node) {
  return this._lookup[node][2];
};

T.prototype.low = function low(node) {
  return this._lookup[node][0];
};

T.prototype.high = function high(node) {
  return this._lookup[node][1];
};

function Build(f) {
  var t = new T();
  var h = new H();
  function B(v) {
    if(v.length == f.length) {
      return f.apply(null, v);
    }
    var low = +B(v.concat([0]));
    var high = +B(v.concat([1]));
    return Mk(v.length, low, high);
  }
  function Mk(i, low, high) {
    if(low === high) {
      return low;
    }
    if(h.member(i, low, high)) {
      return h.lookup(i, low, high);
    }
    var node = t.add(i, low, high);
    h.insert(i, low, high, node);
    return node;
  }
  B([]);
  console.log(t, h);
}

module.exports = Build;
