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
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h1 className="text-2xl font-bold mb-6 text-center">Price Drop Calculator</h1>
          <div className="mb-4">
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">Enter Price</label>
            <input
              type="number"
              id="price"
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <button
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600"
            onClick={calculateDrops}
          >
            Calculate
          </button>

          {results && (
            <div className="mt-6">
              <div className="text-lg">
                <strong>4%-6% drop price range:</strong> {results.range4to6}
              </div>
              <div className="text-lg">
                <strong>5% drop price:</strong> {results.drop5}
              </div>
              <div className="text-lg">
                <strong>9%-11% drop price range:</strong> {results.range9to11}
              </div>
              <div className="text-lg">
                <strong>10% drop price:</strong> {results.drop10}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default App
