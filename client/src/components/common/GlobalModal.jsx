import { createPortal } from 'react-dom'

const GlobalModal = ({ children, isOpen, onClose }) => {
    return (isOpen ? (
        createPortal(
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0D0D0DB0] w-full">
                <div className="relative rounded shadow-lg">
                    <button onClick={onClose} className="absolute top-2 right-2">X</button>
                    {children}
                </div>
            </div>,
            document.getElementById('root')
        )
    ) : null)
}

export default GlobalModal