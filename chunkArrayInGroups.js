function chunkArrayInGroups(arr, chunkSize)
{
  let chunkArray = [];
  
  let a = 0;
  for (let i = 0 ; i < arr.length ; i += chunkSize)
  { 
    chunkArray[a] = arr.slice(i, i+chunkSize);
    a++;
  }
  
  return chunkArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
