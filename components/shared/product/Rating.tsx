// https://v0.dev/chat/
// PROMPT:create a rating component like amazon, only the star icons, it get rating as a nummber and show stars based on it. it should cover all floating point numbers like 4.2, 54,5, 4.8

import { Star } from 'lucide-react'
import React from 'react'

interface StarRatingProps {
  rating: number
  size?: number
}
const Rating = ({ rating, size = 5 }: StarRatingProps) => {
  const normalizedRating = Math.max(0, Math.min(rating, 5))

  // Create an array of maxRating length
  const stars = Array.from({ length: 5 }, (_, i) => {
    const fillPercentage = Math.min(
      100,
      Math.max(0, (normalizedRating - i) * 100)
    )

    return (
      <div key={i} className='relative inline-block'>
        {/* Empty star (background) */}
        <Star className={`text-primary w-${size} h-${size}`} />

        {/* Filled star (foreground with clip-path) */}
        <div
          className='absolute top-0 left-0 overflow-hidden'
          style={{ width: `${fillPercentage}%` }}
        >
          <Star className='fill-primary text-primary' />
        </div>
      </div>
    )
  })

  return (
    <div
      className='flex items-center'
      aria-label={`Rating: ${rating} out of 5 stars`}
    >
      {stars}
      <span className='sr-only'>{normalizedRating} out of 5 stars</span>
    </div>
  )
}

export default Rating
