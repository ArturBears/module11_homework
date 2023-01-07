const generateSum = () => {
    const sum = (a, b) => a + b;
    return sum;
  };
  
  const sum = generateSum(); 
  console.log(sum(3, 9));