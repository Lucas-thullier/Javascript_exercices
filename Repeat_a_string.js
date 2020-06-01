function repeatStringNumTimes(str, num) {
  if (num < 1 || Number.isInteger(num) === false ){
    let emptyStr = "";
    return emptyStr;
  }else{
    let longStr = "";
    for (let p = 0; p < num ; p++){
       longStr += str; 
    }
    return longStr;
  }
  
}

repeatStringNumTimes("abc", -2);

