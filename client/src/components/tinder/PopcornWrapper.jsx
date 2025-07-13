import React, { useState } from 'react'
import { motion } from "motion/react"
import Popcorn from './Popcorn'
import { useMatchingSocketStore } from '@/store/matching.store'

const circleStyles = [
  { size: 300, opacity: 0.15, delay: 0 },
  { size: 260, opacity: 0.20, delay: 0.1 },
  { size: 220, opacity: 0.25, delay: 0.2 }
]

const PopcornWrapper = () => {
  const MAX_TOTAL_CLICKS_BEFORE_UPDATE_LOCATION = 5
  const [totalClicks, setTotalClicks] = useState(0)
  const [isClicked, setIsClicked] = useState(false)
  const updateCurrentLocation = useMatchingSocketStore(state => state.updateCurrentLocation)
  const matchedUser = useMatchingSocketStore(state => state.matchedUser)

  const handleOnClick = () => {
    setTotalClicks(click => click + 1)
    setIsClicked(true)
    setTimeout(() => setIsClicked(false), 200)

    if (totalClicks > MAX_TOTAL_CLICKS_BEFORE_UPDATE_LOCATION) {
      setTotalClicks(0)
      updateCurrentLocation()
    }
  }

  return (
    <div className="relative flex items-center justify-center w-full">
      {circleStyles.map((circle, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-[#FFD7A1] drop-shadow-2xl"
          style={{
            width: circle.size,
            height: circle.size,
            opacity: circle.opacity
          }}
          animate={{
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: circle.delay
          }}
        />
      ))}

      <div className="relative z-10" onClick={handleOnClick}>
        <Popcorn isClicked={isClicked} isMatched={matchedUser} />
      </div>
    </div>
  )
}

export default PopcornWrapper
