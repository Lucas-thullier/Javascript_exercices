function frankenSplice(arr1, arr2, n) {
  let sliceArr1 = arr1.slice(0, arr1.length);
  sliceArr1 = sliceArr1.reverse();
  
  let spliceArr2 = arr2.slice(0, arr2.length);
  
  for (let i in sliceArr1){
  spliceArr2.splice(n, 0, sliceArr1[i]);
  }
  return spliceArr2;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
