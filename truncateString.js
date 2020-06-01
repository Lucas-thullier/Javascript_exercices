function truncateString(str, num) {
  let arrayStr = str.split("");
  let truncateStr = "";
  if (num > str.length){
    num = str.length;  
  }
  for(let p = 0; p < num ; p++){
    truncateStr += arrayStr[p]; 
  }
  
  if (arrayStr.length <= num){
    return truncateStr;

  }else{
    return truncateStr+"...";
  }
}

truncateString("A-tisket a-tasket A green and yellow basket","A-tisket a-tasket A green and yellow basket".length + 2);
