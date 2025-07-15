import React, { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { useMatchingSocketStore } from '@/store/matching.store'

const PopcornParticleClicked = ({ isHidden }) => {
  return (
    <>
      <div hidden={isHidden} className='absolute left-1/2 -translate-x-1/2'>
        <img src="/tinder/popcorn_particle_clicked.svg" alt="" />
      </div>
    </>
  )
}

const PopcornParticleMatched = ({ isHidden }) => {
  return (
    <>
      <div hidden={isHidden} className='absolute left-1/2 -translate-x-1/2 -top-20'>
        <img src="/tinder/popcorn_particle_matched.svg" alt="" />
      </div>
    </>
  )
}

const Popcorn = ({ isClicked }) => {
  const [state, setState] = useState('default')

  const matchedUser = useMatchingSocketStore(state => state.matchedUser)

  useEffect(() => {
    if (matchedUser) {
      setState('matched')
    } else {
      setState('default')
    }
  }, [matchedUser])

  return (
    <motion.div
      className='drop-shadow-2xl scale-75 sm:scale-100 w-[300px] h-[300px]'
      whileTap={{ scale: 1.5 }}
      transition={{ type: 'spring', stiffness: 300, damping: 10 }}
    >
      <div className='relative w-full h-full'>
        <PopcornParticleClicked isHidden={!isClicked} />
        <PopcornParticleMatched isHidden={state !== 'matched'} />
        <img
          className='absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2'
          src="/tinder/popcorn_mobile.svg"
          alt=""
        />
      </div>
    </motion.div>
  )
}


export default Popcorn
