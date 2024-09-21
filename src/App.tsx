import React, { useState } from 'react'

interface DropResults {
  drop5: string
  drop10: string
  range4to6: string
  range9to11: string
}

const App: React.FC = () => {
  const [price, setPrice] = useState<string>('')
  const [results, setResults] = useState<DropResults| null>(null)

  const calculateDrops = (): void => {
    const inputPrice = parseFloat(price)

    if (!isNaN(inputPrice)) {
      const dropPrice = (percent: number): string => (inputPrice - inputPrice * percent).toFixed(2)

      const drop5 = dropPrice(0.05)
      const drop10 = dropPrice(0.1)
      const range4to6 = `${dropPrice(0.04)} - ${dropPrice(0.06)}`
      const range9to11 = `${dropPrice(0.09)} - ${dropPrice(0.11)}`

      setResults({
        drop5,
        drop10,
        range4to6,
        range9to11
      })
    }
  }
  return (
    <>
    </>
  )
}

export default App
