import { createPortal } from 'react-dom'

const GlobalModal = ({ children, isOpen, onClose }) => {
    return (isOpen ? (
        createPortal(
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0D0D0DB0]">
                <div className="relative bg-white p-6 rounded shadow-lg">
                    <button onClick={onClose} className="absolute top-2 right-2">X</button>
                    {children}
                </div>
            </div>,
            document.getElementById('root')
        )
    ) : null)
}

export default GlobalModal