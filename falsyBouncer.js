function bouncer(arr) {
  let arrWithoutFalse = [];
  for (let i in arr){
    if(Boolean(arr[i]) !== false){
      arrWithoutFalse.push(arr[i]);
    }    
  }
  return arrWithoutFalse;
}

bouncer([7, "ate", "", false, 9]);
