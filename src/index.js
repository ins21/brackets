module.exports = function check(str, bracketsConfig) {
  let b = bracketsConfig.reduce((acc, i) => acc + i, '').replace(/,/g, '');
  let stack = [];

  for (let i of str) {
    if (b.indexOf(i) != b.lastIndexOf(i)) { // if opening and closing brackets are the same 
      if (!stack.includes(i)) stack.push(i);
      else if (b[b.lastIndexOf(i)-1] == stack[stack.length-1]) stack.pop();
      else return false;
    } else { // if opening and closing brackets are different
      if (b.indexOf(i) % 2 == 0) stack.push(i);
      else if (b[b.indexOf(i)-1] == stack[stack.length-1]) stack.pop();
      else return false;
    }    
  }

  return stack.length === 0;
}