function naturalNumber(x, n) {
    let result = x;
  
    for (let i = 1; i < n; i++) {
      result *= n;
    }
  
    return result;
  }
  
  let x = prompt("x?", '');
  let n = prompt("n?", '');
  
  if (n < 1) {
    alert(`${n}`);
  } else {
    alert( naturalNumber(x, n) );
  }