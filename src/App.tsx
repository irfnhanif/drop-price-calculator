"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

interface DropResults {
  drop5: string
  drop10: string
  range4to6: string
  range9to11: string
}

export default function PriceDropCalculator() {
  const [price, setPrice] = useState<string>('')
  const [results, setResults] = useState<DropResults | null>(null)

  useEffect(() => {
    document.title = 'Price Drop Calculator';
  }, []);

  const calculateDrops = (): void => {
    const inputPrice = parseFloat(price)

    if (!isNaN(inputPrice)) {
      const dropPrice = (percent: number): string => (inputPrice - inputPrice * percent).toFixed(2)

      const drop5 = dropPrice(0.05)
      const drop10 = dropPrice(0.1)
      const range4to6 = `$${dropPrice(0.04)} - $${dropPrice(0.06)}`
      const range9to11 = `$${dropPrice(0.09)} - $${dropPrice(0.11)}`

      setResults({
        drop5,
        drop10,
        range4to6,
        range9to11
      })
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen w-full bg-gray-100 p-4">
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">Price Drop Calculator</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="price" className="text-lg">Enter Price</Label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-2xl text-gray-500">$</span>
                <Input
                  type="number"
                  id="price"
                  placeholder="0.00"
                  className="text-2xl h-16 pl-8"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
            </div>
            <Button 
              className="w-full text-lg h-12" 
              onClick={calculateDrops}
            >
              Calculate
            </Button>
          </div>

          {results && (
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">5% Drop</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">${results.drop5}</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">10% Drop</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">${results.drop10}</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">4% - 6% Range</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">{results.range4to6}</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">9% - 11% Range</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">{results.range9to11}</p>
                </CardContent>
              </Card>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}