// complete the given function

function palindrome(str){
let original = "";
  let reverse = "";

  // Step 1: manually clean string (no methods like replace)
  for (let i = 0; i < str.length; i++) {
    let ch = str[i];

    // convert uppercase to lowercase manually
    if (ch >= 'A' && ch <= 'Z') {
      ch = String.fromCharCode(ch.charCodeAt(0) + 32);
    }

    // keep only alphabets and numbers
    if (
      (ch >= 'a' && ch <= 'z') ||
      (ch >= '0' && ch <= '9')
    ) {
      original += ch;
    }
  }

  // Step 2: reverse manually (like your logic)
  for (let i = original.length - 1; i >= 0; i--) {
    reverse += original[i];
  }

  // Step 3: compare
  if (original === reverse) {
    return true;
  } else {
    return false;
  }

}
module.exports = palindrome
