import React, { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)
  const [amount, setAmount] = useState(0)

  return (
    <>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <input
        type="number"
        name={'amount'}
        value={amount}
        onChange={(e) => setAmount(parseInt(e.target.value))}
      />
      <button onClick={() => setCount(amount)}>Set</button>
    </>
  )
}

export default Counter
