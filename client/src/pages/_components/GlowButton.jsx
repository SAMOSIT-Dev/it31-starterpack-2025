export default function GlowButton({ children, width, height, options }) {

    const btnStyle = () => {
        return options.isDisabled ? 'grayscale-100 opacity-75' : ''
    }    
    
    return (
        <div className={`${width} ${height} ${btnStyle()} rounded-[20px] p-[3px] bg-button-gradient  shadow-[0_0_31px_6px_#BB3E4291]/57 `}>
            <button disabled={options?.isDisabled} className={`w-full h-full rounded-[18px] bg-[radial-gradient(229.64%_116.67%_at_50.36%_8.82%,#66232C_0%,#BB3E42_46.63%,#FE8A4F_100%)]
            flex items-center justify-center gap-[8px] cursor-pointer`}>
                {children}
            </button>
        </div>
    )
}