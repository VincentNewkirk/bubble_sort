function sortingAlg(arr) {
  var i = 0;
  do{
    i++;
    for(var j = 0; j < arr.length; j++){
      if( arr[j] > arr [j+ 1] ){
        var temporary = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temporary;
      }
    }
   } while(i<arr.length);
  return arr;
}

module.exports = sortingAlg;