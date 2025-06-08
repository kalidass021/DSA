/* 
    Truncate the text
    write a function called truncate that checks the length of the given string - str,
    and if it surpasses a specified maximum length, maxlength, it replaces the end of the string
    with the ellipsis character '...' so that the length matches the maximum length
*/

// input ===> str = 'JavaScript is a synchronous single threaded language'
// outpu ====> 'JavaScript is a...'

let str = 'JavaScript is a synchronous single threaded language';
let maxLength = 15;

function truncate(str, maxLength) {
  if (str.length < maxLength) {
    return str;
  }

  let truncated = str.slice(0, maxLength) + '...';
  return truncated;
}

console.log(truncate(str, maxLength));
