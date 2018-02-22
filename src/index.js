/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
 var count = 0;
for(var i = 0;i < preferences.length; i++){
 if (preferences[i]!=0){
var n1 = preferences[i], n2=preferences[n1-1], n3 = preferences[n2-1];
 if((i+1 == n3) && (preferences[i] != 0) && (n1 != n3) && (n1 != n3) && (n2 != n3)){
      ++count;
      preferences[i] = preferences[n1-1] = preferences[n2-1] = 0;
    }
  }
}
  return count;
};

// var a = [2,3,1];
// for (var j=0;j<a.length;j++){
//   for(var i=0;i<a.length;i++){
//     if(a[i] == a[i+1]){
//     a.splice(i+1, 1);}
//     else continue;
// }
// }
//   console.log(a);