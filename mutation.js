function mutation(arr) 
{
  for(let i in arr)
  {
    arr[i] = arr[i].toLowerCase();
  }
  let truthArray= [];
  for(let a = 0; a < arr[1].length ; a++)
  {

    for(let i = 0; i < arr[0].length ; i++)
    {

      if(arr[1][a] == arr[0][i])
      {
             truthArray[a] = true;
             break;
      }
      else if (arr[1][a] !== arr[0][i])
      {
        truthArray[a] = false;
      }
    }
  }
  let matchLetter = 0;
    for (let i in truthArray)
  {
    if(truthArray[i] === true)
    {
      matchLetter ++;
    }
  }

  if (matchLetter === arr[1].length)
    {
      return true;
    }
  else
    {
      return false;
    }
}

mutation(["Mary", "Aarmy"]);