function titleCase(str) {
  let arrayStr = str.split(" ");
  for(let i in arrayStr){
    arrayStr[i] = arrayStr[i].toLowerCase();
    arrayStr[i] = arrayStr[i].replace(arrayStr[i][0],arrayStr[i][0].toUpperCase())
  }
  str = arrayStr.join(" ");
  
  return str;
}

titleCase("sHoRt AnD sToUt");