function validPhoneNumber(phoneNumber){
  //TODO: Return whether phoneNumber is in the proper form
  //split string into chars, including whitespace
  let char = phoneNumber.split("");
  console.log(char);
  //check each char individually
  //char 0 must be open paren
  if (char[0] !== "(") {
    return false;
    }
  //chars 1-3 must be digits
  for (i=1; i<3; i++) {
    if (typeof(parseInt(char[i])) !== 'number') {
      return false;
      }
  }
  //char 4 must be close paren
  if (char[4] !== ")") {
    return false;
    }
  //char 5 must be space
  if (char[5] !== " ") {
   return false;
   }
  //chars 6-8 must be digits
  for (i=6;i<8;i++) {
    if (typeof(parseInt(char[i])) !== 'number') {
      return false;
      }
  }
  //char 9 must be hyphen
  if (char[9] !== "-") {
    return false;
    }
  //char 10-13 must be digits
  for (i=10;i<13;i++) {
    if (typeof(parseInt(char[i])) !== 'number') {
      return false;
      }
  }
  //phone number can only be 14 chars long
  if (char.length > 14) {
    return false;
    }
   return true;
}