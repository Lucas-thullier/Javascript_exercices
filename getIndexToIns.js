  
function getIndexToIns(arr, num) {
  arr.sort(function(a,b){return a - b;});
  let index = 0;
  
  if (arr[0] == null){
    index = 0;
    return index;   
  }
  if (num > arr[arr.length-1]){
    index = arr.length;
    return index;
  }else{
    for(let i = 0 ; i <= arr.length ; i++){
      if (num == arr[i]){
        index = arr.indexOf(arr[i]);
        return index;
      }
    
      else if (num > arr[i] && num < arr[i+1]){
        index = arr.indexOf(arr[i+1]);
        return index;
      } 
    }
  }
}
getIndexToIns([], 1);