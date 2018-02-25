/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var count = 0;
  for (var i = 0; i < preferences.length; i++) {
      var corner_1 = preferences[i] - 1;
      var corner_2 = preferences[corner_1] - 1;
      var corner_3 = preferences[corner_2] - 1;

      if ((corner_3 == i) && (corner_1 != corner_2)) {

          count++;
          preferences[corner_1] = corner_1 + 1;

          preferences[corner_2] = corner_2 + 1;

          preferences[corner_3] = corner_3 + 1;
      }
  }
  return count;

};