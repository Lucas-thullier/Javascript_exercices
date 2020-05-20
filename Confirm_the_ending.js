function confirmEnding(str, target) {
  let arrayStr = str.split(' ');
  let indiceLastWord = arrayStr.length - 1; 
  if (arrayStr[indiceLastWord].match(target)){
    let arrayWord = arrayStr[indiceLastWord].split('');
    let indiceLastChar = arrayWord.length - 1;
    
    let arrayTarget = target.split('');
    let indiceLastCharTarget = target.length - 1;
    if (arrayWord[indiceLastChar]== arrayTarget[indiceLastCharTarget]){
      return true;
      }
    else{
      return false;
  }
   }
  else{
    return false;
  }
}

confirmEnding("Connor", "n");
