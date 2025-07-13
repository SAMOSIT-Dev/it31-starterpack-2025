import React from 'react'
import { motion } from 'motion/react'

const Popcorn = () => {
  return (
    <motion.div
      className='drop-shadow-2xl'
      whileTap={{ scale: 1.5 }} // scale up slightly on tap/click
      transition={{ type: 'spring', stiffness: 300, damping: 10 }}
    >
      <img src="/tinder/popcorn_mobile.svg" alt="Popcorn" />
    </motion.div>
  )
}

export default Popcorn
