import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const handleCLick = () => {
    setCount(count + 1)
  }

  return (
    <>
      <button onClick={handleCLick}>Edik</button>
      <p>{count}</p>
    </>
  )
}

export default App
