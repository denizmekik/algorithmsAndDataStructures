var rotate = function(matrix) {
  var n = matrix.length;
  var rotated = [[],[],[],[]];
  
  for (var i=0; i<n; i++) {
    for (var j=0; j<n; j++) {
      console.log(matrix[i][j] + "->" + i + "," + j)
      rotated[j][n-1-i] = matrix[i][j]
    }
  }
  return rotated;
}

rotate([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]);