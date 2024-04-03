import React from 'react'
// import CarDisplay from './carDisplay'
import Car_Card from './Car_Card'

const CarStr = ({cars}) => {
  return (
    cars && cars.length > 0 ? (
      cars.map((car, index) => (
        <Car_Card key={index} car={car} />
      ))
    ) : (
      <p>No cars available</p>
    )
  )
}

export default CarStr