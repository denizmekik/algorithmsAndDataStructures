var Graph = function() {
  this._node = {};
}

Graph.prototype.addNode = function (node) {
  this._node[node] = this._node[node] || {edges: {}}
}

// {
//   1: {edges: {2:2}},
//   2: {edges: {}},
//   3: {edges: {}},
//   4: {edges: {}}
// }

// 1 --- > 2 ------> 3
//                   |
//                   |
//                   |
//                   v
//          <--------4