import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 }
}

const modalVariants = {
  hidden: { opacity: 0, scale: 0.9, y: -50 },
  visible: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.9, y: -50 }
}

const GlobalModal = ({ children, isOpen, onClose }) => {
  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0D0D0DB0] w-full"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.div
            className="relative rounded shadow-lg"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <button onClick={onClose} className="absolute top-2 right-2">
              X
            </button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.getElementById('root')
  )
}

export default GlobalModal
