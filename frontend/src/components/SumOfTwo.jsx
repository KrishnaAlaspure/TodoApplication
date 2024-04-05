import React, { useState } from 'react';

function SumOfTwo() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [sum, setSum] = useState(0);

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    if (name === 'num1') {
      setNum1(parseFloat(value));
    } else {
      setNum2(parseFloat(value));
    }

    setSum(num1 + num2);
  }

  return (
    <div>
      <input name="num1" value={num1} onChange={handleInputChange} />
      <input name="num2" value={num2} onChange={handleInputChange} />
      <p>The sum of {num1} and {num2} is {sum}</p>
    </div>
  );
}

export default SumOfTwo;