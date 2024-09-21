import React, { useState } from 'react'

interface DropResults {
  drop5: string
  drop10: string
  range4to6: string
  range9to11: string
}

function App: React.FC() {
  const [price, setPrice] = useState<string>('')
  const [results, setResults] = useState<DropResults| null>(null)

  return (
    <>
    </>
  )
}

export default App
